---
title: "Assign leave to employees"
description: "Give a leave type to a whole team from Leave Balances, check the balances, and correct one balance afterwards"
doc_type: how-to
reviewed_against: "2.4.0"
---

# Assign leave to employees

In November 2026, Maya Chen, the HR administrator at Lakeside Works, gives **Unpaid Leave** to the 18 people who report to Sofia Rossi. Nobody holds that leave type yet, so nobody can request it. Maya assigns it to the whole team in one step and checks the balances afterwards. Verified for Maya Chen (administrator). Daniel Okafor (HR Manager) opened the same dialog, and Sofia Rossi (engineering manager) only views balances.

## Before you start

- You can open **Leave → Leave Balances** and use **Create**. Maya is an administrator, and Daniel, the HR Manager, also sees **Create**. Sofia, who has no extra permission, sees the balances but has no **Create** button. See [Leave](/hr/functional/v2.0/leave/).
- The leave type exists in [Configuration](/hr/functional/v2.0/leave/configuration). To give one type to a single person, use **Assign** in its row there. The dialog asks only for the employee.

## Steps

1. Open **Leave → Leave Balances** and click **Create**.

   ![All Leave Balances list with the Create button highlighted](../media/leave-balances-create-button.png)
   *Create opens the Assign Leaves dialog. Sample data.*

2. In the **Assign Leaves** dialog, click the **Leave Type** field and choose **Unpaid Leave**. You can choose several types here. The field has no star, but the dialog does not save without a type.
3. In **Employee**, click **Filter**. The picker lists all 38 employees.
4. Open **People** in the filters on the left. The **Reporting manager** select is under **People**, and you may need to scroll the filter panel to reach it. Click it and choose **Sofia Rossi**. The list drops to 18 employees, and a tag reads `Reporting manager: Sofia Rossi`.
5. Tick the box in the header of the list to select everyone. The counter reads `18 selected`. Click **Add**.

   ![Employee picker filtered by reporting manager Sofia Rossi, with the header checkbox ticked and 18 selected](../media/leave-balances-picker-sofias-team.png)
   *The same picker has Department, Job position, Company, Work type, Shift, Employee type and Job role filters. Sample data.*

6. Back in the dialog, check that **Employee** shows 18 names, then click **Save**.

   ![Assign Leaves dialog with Unpaid Leave chosen and the 18 employees listed](../media/leave-balances-assign-form-filled.png)
   *Each employee appears as a tag; remove one with its x. Sample data.*

## Check that it worked

A green message reads `Leave types assigned successfully.` **Select** above the list goes from 76 to 94, which is 18 new balances, and the new rows have **Assigned Date** set to today's date (2026-11-19 in the screenshots, the day they were taken).

Type `Ravi` in **Search** and press Enter. The list groups by leave type, and Ravi Menon now has an **Unpaid Leave** row next to **Annual Leave** (18.0 days) and **Sick Leave**. Its **Available Days** and **Total Leave Days** read 100000.0, and **Carryforward Days** reads 0.0. Unpaid Leave has no limit, and Horilla stores "no limit" as 100000 days.

![Leave Balances grouped by leave type for Ravi Menon, with the Unpaid Leave row highlighted at 100000.0 days](../media/leave-balances-ravi-unpaid-leave.png)
*Ravi holds Unpaid Leave. The row shows 100000.0 days, which stands for no limit. Sample data.*

Sign in as Ravi and open **Leave → My Leave Requests**. The **Unpaid Leave** card reads **Available Leave Days** `No Limit`, and a one-day request on it saves with `Leave request created successfully`.

## Correct one balance

Use this when one employee needs a different number of days from the one the assignment gave, for example three days of a limited type instead of the full allowance. It changes that employee's balance only.

1. Open **Leave → Leave Balances**, type the employee's name, here `Ravi`, in **Search** and press Enter.
2. Click the leave type group, here **Unpaid Leave**, to expand it.
3. Click **Edit** (the pencil) in the employee's row. The **Update Available Leave** dialog opens with **Available Days** and **Carryforward Days**.
4. Set **Available Days** to `3` and click **Save**.

   ![Update Available Leave dialog with Available Days set to 3](../media/leave-balance-edit-available-days.png)
   *Edit changes one employee's balance only. Sample data.*

A green message reads `Available leaves updated successfully...`. In the walk the dialog stayed open for about a second after **Save** and then closed on its own, and the row behind it still showed the old value. The new value appears when you search again or reload the page. Ravi's request form then shows `Available Leaves : 3.0`.

## If something goes wrong

- **The leave type is missing from the list in the dialog.** Create it first in [Configuration](/hr/functional/v2.0/leave/configuration). See [Set up leave types and carry forward](/hr/functional/v2.0/leave/guides/set-up-leave-types-and-carry-forward).
- **Sofia sees no Create button.** Only roles that may add balances see it; a reporting manager sees the balances only.

::: info Not tested
Assigning a type to someone who already holds it, **Import**, **Export**, **Delete** and the group header's **Assign Leave** button were not exercised. Assigning to a single person from **Leave Balances** (the **Assign** icon in **Configuration** was used for one person on another page), **Carryforward Days** on a new balance, and **Leave Ledger** and **History** were not exercised either. Daniel opened the dialog but did not save. Sofia's access to **Edit** was not checked.
:::

## Related pages

- [Leave Balances](/hr/functional/v2.0/leave/leave-balances)
- [Configuration](/hr/functional/v2.0/leave/configuration)
- [Set up leave types and carry forward](/hr/functional/v2.0/leave/guides/set-up-leave-types-and-carry-forward)
- [Create a leave request for an employee](/hr/functional/v2.0/leave/guides/create-a-leave-request-for-an-employee)
