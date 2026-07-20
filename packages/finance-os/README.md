# SBB FinanceOS Foundation (BOSF-018)

The **FinanceOS** Foundation module defines SBB's core domain-specific structures, financial governance processes, general ledgers, budgeting structures, accounts payable/receivable tracks, liquidity forecasts, procurement controls, and compliance policy constraints of the **Business Operating System Framework (BOSF)**.

This module is the third Business Operating System built completely on top of SBB's foundational enterprise modules (`@sbb/business-foundation`, `@sbb/business-workflows`, `@sbb/business-performance`, `@sbb/business-integrations`, etc.).

## Architectural Principles
* **Declarative Financial Governance**: Rather than performing core bookkeeping natively, FinanceOS models standard financial entities (Budgets, Ledgers, Invoices, Cash Flows) declaratively to allow provider-independent ERP synchronizations.
* **Autonomous Treasury & Cash Forecasting**: Standardizes rolling 12-week cash forecasts, risk alerts, spend anomalies, and budget reallocations.
* **Rigorous Dual-Sign-Off Governance**: Enforces dual signatures, multi-approver tier matrices, and regulatory anti-bribery threshold blocks.

## Directory Structure

```
packages/finance-os/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── finance-framework.ts       # Main FinanceFramework service contract
    │   ├── finance-context.ts         # Timezone-aware multi-tenant contexts
    │   └── finance-lifecycle.ts       # Budget, JE, PO, Invoice lifecycles
    ├── budgeting/
    │   ├── budget.ts                  # Main budget profiles and allocations
    │   ├── budget-category.ts         # OpEx, CapEx, and COGS classifications
    │   ├── budget-allocation.ts       # Department/Category spending limits
    │   └── budget-revision.ts         # Official budget transfers and reallocations
    ├── accounting/
    │   ├── ledger.ts                  # General Ledger summaries
    │   ├── journal-entry.ts           # Balanced double-entry ledger listings
    │   ├── chart-of-accounts.ts       # Asset, Liability, Revenue accounts tree
    │   └── accounting-period.ts       # Monthly/Quarterly fiscal period boundaries
    ├── procurement/
    │   ├── purchase-request.ts        # Internal B2B purchase requisitions
    │   ├── purchase-order.ts          # Legally binding POs sent to vendors
    │   ├── vendor.ts                  # Vendor profiles, rating scores, and compliance
    │   └── procurement-policy.ts      # Minimum vendor SLA and competitive bid caps
    ├── receivables/
    │   ├── customer-invoice.ts        # Tax-compliant client billing records
    │   ├── payment-receipt.ts         # Payments received with IBAN/Stripe clearing
    │   └── aging-analysis.ts          # Rolling 30/60/90 days overdue collections
    ├── payables/
    │   ├── supplier-invoice.ts        # Received B2B merchant invoices
    │   ├── payment-schedule.ts        # Planned disbursement batches
    │   └── payment-approval.ts        # Sign-off authorizations and dual checks
    ├── cash-flow/
    │   ├── cash-flow.ts               # Operating, Investing, Financing statements
    │   ├── liquidity-position.ts      # Multi-bank consolidated cash balances
    │   └── treasury-forecast.ts       # Rolling expected cash burn forecasts
    ├── analytics/
    │   ├── finance-dashboard.ts       # CFO layout grids and charts placement
    │   ├── finance-report.ts          # Balance sheets and Profit & Loss reports
    │   └── finance-kpis.ts            # Burn rate, margins, and DSO/DPO metrics
    ├── ai/
    │   ├── finance-ai-agent.ts        # Smart agent capability rules
    │   ├── financial-risk-insight.ts  # Duplicate payment and budget overrun alerts
    │   ├── cashflow-forecast.ts       # AI rolling cash predictions with confidence bounds
    │   └── budget-recommendation.ts   # Automated SaaS/Hosting cost-saving rules
    ├── governance/
    │   ├── finance-owner.ts           # Accountable asset and bank directors
    │   ├── finance-policy.ts          # FCPA anti-bribery and compliance triggers
    │   └── approval-matrix.ts         # Amount-dependent tier approvals
    └── events/
        ├── budget-created.event.ts    # Emitted on new approved budget profiles
        ├── invoice-issued.event.ts    # Emitted when customer invoices are released
        ├── payment-received.event.ts  # Emitted on client payment clearings
        ├── payment-approved.event.ts  # Emitted on payables sign-offs
        └── financial-period-closed.event.ts # Emitted when a fiscal period locks
```

## Out of Scope
* Direct ERP software implementations (SAP, Oracle, QuickBooks).
* Live payment processing or card authorization.
* Direct banking integration APIs (Open Banking, Plaid).
* GUI charting components or active web dashboards.
