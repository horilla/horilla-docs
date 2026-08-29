# Installation Intelligence (Telemetry)

Horilla can optionally send **anonymous technical metadata** so the Horilla project can see which versions and environments are in use. This helps decide which Python, Django and database versions to keep supporting.

It is **opt-in and off by default**. A fresh install sends nothing until a superuser explicitly enables it, and no HR data is ever transmitted.

::: tip Looking for the privacy notice?
This page is the operator guide — what is sent, and how to control or disable it. For the legal notice (data controller, legal basis, retention and your erasure rights), see the Horilla privacy notice at [horilla.com/privacy](https://horilla.com/privacy).
:::

## 1. What is sent

Only these JSON keys, once per week, and only if a superuser turns the setting on:

| Field | Example | Purpose |
|---|---|---|
| `schema_version` | `1` | Payload format version |
| `installation_id` | random UUID4 | Distinguishes installs so one is not counted many times |
| `horilla_version` | `2.0.0` | Version adoption |
| `python_version` | `3.12.0` | Which runtimes to keep supporting |
| `django_version` | `5.2` | Framework support window |
| `database_engine` | `postgresql` | Which databases to prioritise |
| `deployment` | `docker` | `bare`, `docker`, `compose` or `k8s` |
| `os` | `Linux` | Platform support |
| `architecture` | `x86_64` | Platform support |
| `enabled_modules` | `["attendance", "payroll"]` | Which first-party modules are actually used |
| `edition` | `community` | Community vs enterprise mix |

The payload is built from a fixed allowlist and is rejected at runtime if it ever contains a key outside that list. It is capped at 8 KB.

## 2. What is never sent

No employee, payroll, leave, attendance or document data. Specifically, none of the following ever leaves your server:

- Any HR record of any kind
- Company name, country, org size or timezone
- Email addresses, usernames or IP addresses
- Hostname, database name, host or password
- `SECRET_KEY` or any credential

Module names are also filtered against a fixed list of first-party apps, so a private or custom app label cannot appear in the payload.

## 3. Enable or disable

The toggle lives at **Settings → Privacy → Privacy & Product Insights**. A superuser can also preview the exact payload from that page before deciding.

Three environment variables control it independently of the UI:

```bash
HORILLA_TELEMETRY=0          # Hard kill switch: forbids pings even if the UI toggle is on
HORILLA_VERSION_CHECK=0      # Skips version/security notices (default: already off)
HORILLA_TELEMETRY_SCHEDULER=0  # Starts no background scheduler (see section 5)
```

`HORILLA_TELEMETRY=0` is the setting to use for an air-gapped or policy-restricted deployment: it takes precedence over the database toggle, so no ping can be sent regardless of what an admin clicks.

Installs running with `DEBUG=True` never send anything unless `HORILLA_TELEMETRY_FORCE=1` is also set.

## 4. Version and security notices

Separately from telemetry, Horilla can check for version and security notices. This is **off by default** and sends **no installation ID** — it is an anonymous GET, not a heartbeat.

```bash
HORILLA_VERSION_CHECK=1      # Enable notices
```

Notice links are allowlisted to `horilla.com`, `docs.horilla.com` and `github.com/horilla/`, and a notice can never disable your install or change a setting.

## 5. Process model

The scheduler runs in **one process per machine**, chosen by a file lock in the temp directory. This matters in a few deployments:

- **`gunicorn --preload`** is handled automatically. The master defers rather than starting a scheduler thread that would never fire, and the first worker to serve a request starts it instead. Horilla's own `docker/gunicorn.conf.py` sets `preload_app = False`, so this only affects custom invocations.
- **Containers and Kubernetes pods** do not share a temp directory, so the lock cannot coordinate across them. An N-pod deployment sends N heartbeats a week. Install counts stay correct — every pod reports the same database-held `installation_id`, and the service upserts on it — only the ping rate is multiplied. To avoid that, set `HORILLA_TELEMETRY_SCHEDULER=0` on all but one replica, or on all of them plus a single CronJob.
- **Platforms without file locking** (notably Windows) start no scheduler at all, rather than one per worker. Use the cron route below.

To run it from cron instead of the in-process scheduler:

```bash
HORILLA_TELEMETRY_SCHEDULER=0   # in your environment
```

```bash
python manage.py telemetry send        # weekly heartbeat
python manage.py telemetry advisories  # version notices, if enabled
```

`manage.py telemetry preview` prints the exact payload without sending it or creating an installation ID.

## 6. Firewall

Allow outbound HTTPS to `telemetry.horilla.com` only if you opt in. If the host is unreachable, Horilla keeps working normally — the send fails silently and is retried on the next weekly run.

The endpoint is hardcoded in the Community client; it cannot be pointed at a different URL.

## 7. Installation ID, backup and restore

The installation ID is stored **in the database**, so it travels with your backups rather than being tied to a container or volume.

Restoring a production dump onto staging therefore copies the ID, which would make one install look like two. Use **Regenerate ID** on the staging copy.

- **Regenerate ID** erases the previous record on the telemetry service *before* minting the new ID, so the copy does not leave an orphaned record behind. If the service is unreachable at that moment, you get a warning saying the old record survived — mail `support@horilla.com` to have it removed.
- **Delete history** erases everything reported for this installation and then discards the local ID, so a later heartbeat cannot recreate it. Product insights are switched off at the same time. If the service cannot be reached, nothing is deleted and your ID is left intact so you can retry.

Both actions tell you which of the two outcomes happened, rather than reporting success unconditionally.
