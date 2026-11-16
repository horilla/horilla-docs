# **Payroll**

The Payroll module runs the pay cycle: contracts that set each person's pay, the payslips generated from them, loans and advances, reimbursements and encashments, income tax brackets, and the allowance and deduction rules behind it all. Open it from **Payroll** in the sidebar.

## **Pages in this chapter**

| Page | Where | What it is for |
|---|---|---|
| [Payroll Dashboard](/hr/functional/v2.0/payroll/dashboard) | **Payroll → Dashboard** | Payroll totals, payslip status and trends |
| [Payslips](/hr/functional/v2.0/payroll/payslips) | **Payroll → Payslips** | Generate, review and send payslips |
| [Contracts](/hr/functional/v2.0/payroll/contracts) | **Payroll → Contracts** | Each person's pay terms |
| [Loans & Salary Advances](/hr/functional/v2.0/payroll/loans) | **Payroll → Loans & Salary Advances** | Loans, advances and fines repaid in instalments |
| [Encashments & Reimbursements](/hr/functional/v2.0/payroll/reimbursements) | **Payroll → Encashments & Reimbursements** | Expense, leave and bonus payouts |
| [Income Tax](/hr/functional/v2.0/payroll/income-tax) | **Payroll → Income Tax** | Tax brackets by filing status |
| [Payroll Configuration](/hr/functional/v2.0/payroll/configuration) | **Payroll → Configuration**, **Settings → Payroll** | Salary structures, allowances, deductions, auto-generation, encashment settings |

## **How the pieces fit**

1. [Configuration](/hr/functional/v2.0/payroll/configuration) defines **allowances** and **deductions** and bundles them into a **salary structure**.
2. A [contract](/hr/functional/v2.0/payroll/contracts) gives each employee a basic salary, a filing status and a salary structure.
3. [Payslips](/hr/functional/v2.0/payroll/payslips) are generated for a date range, grouped in a **batch**, and move through the statuses **Draft, Review Ongoing, Confirmed** and **Paid**.
4. [Loans](/hr/functional/v2.0/payroll/loans) and [reimbursements and encashments](/hr/functional/v2.0/payroll/reimbursements) feed into what an employee is paid.

::: warning Statutory compliance
Horilla stores whatever rates, brackets and rules you configure. The tax brackets and deduction names in the demo are sample data. A setting being present does not mean it matches your country's law; your organisation's policies and local requirements decide how payroll must be set up.
:::

::: info Scope
Pages are described as an administrator sees them. Generating, confirming, paying and deleting payslips, and saving contracts, loans or configuration, change real payroll data and were not exercised on the demo. **Paid** in Horilla is a status; recording a payslip as paid does not execute a bank payment.
:::
