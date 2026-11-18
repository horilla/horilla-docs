---
title: "Leave"
description: "What the Leave module covers, how its pages fit together and where to start"
doc_type: module-overview
reviewed_against: "2.4.0"
---

# Leave

**Leave** is where employees ask for time off and where managers and HR approve it, track balances and set the rules. Open it from **Leave** in the sidebar.

::: info Scope
Verified for Maya Chen (administrator), Daniel Okafor (HR Manager), Sofia Rossi (engineering manager, no extra permission) and Ravi Menon (developer), in the Lakeside Works sample company.
:::

## How the pieces fit

1. An administrator defines leave types in [Configuration](/hr/functional/v2.0/leave/configuration) and gives employees balances in [Leave Balances](/hr/functional/v2.0/leave/leave-balances).
2. An employee asks for leave in [My Leave Requests](/hr/functional/v2.0/leave/my-leave-requests). The request starts as *Requested*.
3. The reporting manager, or HR, decides it in [Leave Requests](/hr/functional/v2.0/leave/leave-requests). Approving deducts the days from the balance.
4. Weekly off days, public holidays and restricted periods decide which days count. See [Leave Rules and Weekly Off Days](/hr/functional/v2.0/leave/leave-rules).

## Set up before you start

- Leave types, in [Configuration](/hr/functional/v2.0/leave/configuration).
- Weekly off days, in **Settings → Organization → Weekly Off Days**. The sample company starts with none, so a request counts every calendar day.
- Employees and their reporting managers, from [Employee](/hr/functional/v2.0/employee).

## Pages in this chapter

| Page | What it is for |
|---|---|
| [Leave Dashboard](/hr/functional/v2.0/leave/dashboard) | Company-wide leave figures and charts |
| [My Leave Requests](/hr/functional/v2.0/leave/my-leave-requests) | Your own balances and requests |
| [Leave Requests](/hr/functional/v2.0/leave/leave-requests) | Everyone's requests, and deciding them |
| [Leave Allocation Request](/hr/functional/v2.0/leave/leave-allocation-requests) | Asking for extra days on a balance |
| [Leave Balances](/hr/functional/v2.0/leave/leave-balances) | Which leave types each employee holds |
| [Restricted Leave Periods](/hr/functional/v2.0/leave/restricted-leave-periods) | Blocking leave over a date range |
| [Public Holidays](/hr/functional/v2.0/leave/public-holidays) | The company holiday calendar |
| [Configuration](/hr/functional/v2.0/leave/configuration) | Leave types and multiple-approval rules |
| [Leave Rules and Weekly Off Days](/hr/functional/v2.0/leave/leave-rules) | Module-wide switches and recurring off days, in **Settings** |

Maya and Daniel have no **Weekly Off Days** item under **Leave**. Sofia and Ravi have one, a read-only list at `/configuration/company-leave-view/`.

## Common tasks

- [Approve a leave request](/hr/functional/v2.0/leave/guides/approve-a-leave-request)
- [Create a leave request for an employee](/hr/functional/v2.0/leave/guides/create-a-leave-request-for-an-employee)
- [Set up leave types and carry forward](/hr/functional/v2.0/leave/guides/set-up-leave-types-and-carry-forward)
- [Assign leave to employees](/hr/functional/v2.0/leave/guides/assign-leave-to-employees)

## Help articles

- [Why does a leave request count the weekend as leave days?](/hr/functional/v2.0/leave/help/why-does-a-leave-request-count-the-weekend-as-leave-days)
- [Why can an employee request more leave days than the balance?](/hr/functional/v2.0/leave/help/why-can-an-employee-request-more-leave-days-than-the-balance)

::: info Not tested
Compensatory leave, allocation requests, restricted periods (Ravi and Sofia can open the page by address without a menu item; its content was not examined), multiple-approval rules, cancellation, bulk actions, and whether a leave type must be held before requesting it were not exercised.
:::

## Permissions, in short

- **Seeing everyone's requests**: `leave.view_leaverequest`. Without it, a reporting manager still gets **Leave Requests** and sees only their team's requests (Sofia sees three rows, Maya and Daniel see all five). Ravi has no **Leave Requests** item, and opening its address sends him to **My Dashboard**.
- **Approving and rejecting**: `leave.change_leaverequest`, or being the employee's reporting manager. The **Approve** icon is greyed on your own request.
- **Leave Balances**: `leave.view_availableleave`. Reporting managers also see it.
- **Configuration**: `leave.view_leavetype` to open it, `leave.change_leavetype` to update a type. Sofia and Ravi see "You Don't Have Permission" if they open it by address.
- **Leave Dashboard**: `leave.view_leaverequest`. Sofia and Ravi have no **Dashboard** item under **Leave**, and Sofia opening `/leave/dashboard/` lands silently on the main Dashboard.
