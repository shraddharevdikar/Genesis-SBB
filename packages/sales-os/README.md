# SBB SalesOS Foundation (BOSF-017)

The **SalesOS** Foundation module defines SBB's core domain-specific structures, pipeline governance processes, deal recommendations, multi-tier account hierarchies, revenue forecasts, and sales-specific compliance policies of the **Business Operating System Framework (BOSF)**.

This module is the second Business Operating System built completely on top of SBB's foundational enterprise modules (`@sbb/business-foundation`, `@sbb/business-workflows`, `@sbb/business-performance`, `@sbb/business-integrations`, etc.).

## Architectural Principles
* **Declarative Pipeline Management**: Rather than executing CRM workflows natively, SalesOS models standard lifecycle states (Leads, Opportunities, Quotations, Customer Success) declaratively to allow provider-independent integration.
* **Autonomous AI Forecasting**: Standardizes predictive analysis models, lead scoring, deal risk factors, and win-probability bounds using generative insights.
* **Rigorous Sales Governance**: Enforces anti-corruption rules, export controls, and maximum pricing discount approval thresholds.

## Directory Structure

```
packages/sales-os/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── sales-framework.ts         # Main SalesFramework service contract
    │   ├── sales-context.ts           # Timezone-aware multi-tenant context sessions
    │   └── sales-lifecycle.ts         # Lead, Opportunity, and Quotation state models
    ├── leads/
    │   ├── sales-lead.ts              # Core parent lead entity
    │   ├── lead-source.ts             # Traditional, offline, and generative/GEO sources
    │   ├── lead-score.ts              # Behavioral and ICP profile fit scores
    │   └── lead-qualification.ts      # BANT (Budget, Authority, Need, Timeline) checks
    ├── accounts/
    │   ├── customer-account.ts        # Primary customer account profile
    │   ├── account-hierarchy.ts       # Parent, corporate division, and global ultimate links
    │   └── account-segment.ts         # Strategic key account, Enterprise, and SMB tiers
    ├── contacts/
    │   ├── business-contact.ts        # Individual procurement/executive profile
    │   └── contact-role.ts            # Buying committee roles (Champion, Economic Buyer)
    ├── opportunities/
    │   ├── sales-opportunity.ts       # Core deal trackers with expected closed dates
    │   ├── opportunity-stage.ts       # Sequential pipeline order and entry criteria checklists
    │   ├── opportunity-value.ts       # ARR, setup, services, and contract durations
    │   └── win-probability.ts         # Rep subjective vs. AI predictive win probabilities
    ├── pipeline/
    │   ├── sales-pipeline.ts          # Regional pipeline and coverage ratios (total/quota)
    │   ├── pipeline-stage.ts          # Aggregate pipeline values and active deal counts
    │   └── revenue-forecast.ts        # Commits, worst-cases, and AI-predicted targets
    ├── quotations/
    │   ├── sales-quotation.ts         # Binding quotation line items
    │   ├── pricing-model.ts           # flat subscriptions, metered usage, or custom hybrids
    │   └── discount-policy.ts         # Autonomous discount caps and multi-approver triggers
    ├── customer-success/
    │   ├── customer-lifecycle.ts      # Active adoption, health indicators, and CS stages
    │   ├── renewal-opportunity.ts     # Scheduled contract renewals and churn risk alerts
    │   └── expansion-opportunity.ts   # Incremental upsells and product cross-sells
    ├── analytics/
    │   ├── sales-dashboard.ts         # Dashboard widget positions and chart coordinates
    │   ├── sales-report.ts            # Performance summaries by sales territory
    │   └── sales-kpis.ts              # ARR, sales cycle, win rate, and churn KPIs
    ├── ai/
    │   ├── sales-ai-agent.ts          # Sales assistant capability specifications
    │   ├── deal-recommendation.ts     # Next best actions (NBAs) and deal velocity guides
    │   ├── revenue-insight.ts         # Regional revenue slip and anomaly indicators
    │   └── forecast-analysis.ts       # Mean absolute percentage errors (MAPE) analytics
    ├── governance/
    │   ├── sales-owner.ts             # Certified territory and legal compliance owners
    │   └── sales-policy.ts            # Export control, sanction lists, and FCPA anti-bribery policies
    └── events/
        ├── lead-created.event.ts      # Emitted when a lead enters the system
        ├── opportunity-created.event.ts # Emitted when a lead converts to an opportunity
        ├── opportunity-won.event.ts   # Emitted when a contract is signed
        ├── opportunity-lost.event.ts  # Emitted when a deal is lost
        └── forecast-updated.event.ts  # Emitted when regional forecasts are recalculated
```

## Out of Scope
* Direct integrations with CRM SaaS (Salesforce, HubSpot, Zoho, Dynamics).
* Workflow engine runtime execution.
* Direct email/phone communication providers.
* Graphical charts or active frontend dashboards.
