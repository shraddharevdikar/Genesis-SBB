# Enterprise Business Reports Framework (BOSF-011)

The Enterprise Business Reports Framework module defines SBB's core domain-independent corporate report documents structure, layout template properties, distribution listings, retention archives, legal hold rules, classification safety, and approval workflows under the **Business Operating System Framework (BOSF)**.

Reports are governed, point-in-time enterprise documents, distinct from dynamic real-time dashboard widgets or analytics computation engines. This framework is inherited by all Business Operating Systems (e.g. `MarketingOS`, `SalesOS`, `FinanceOS`, `HROS`, `LegalOS`, etc.) to standardise compliance disclosures, financial fiscal records, and board-level executive reports across the entire organization.

## Architectural Principles
* **Immutable Document Blueprints**: Reports capture audit-ready data configurations and text at specific historical moments. Once approved and published, they are frozen for regulatory retention.
* **Separation of Templates and Concrete Documents**: Templates handle visual layouts, margins, branding themes, page counts, and localized translations, allowing report instances to focus solely on chapter layouts, executive summaries, and sections data.
* **Audit-Level Publication and Distribution Tracks**: Explicitly structures subscription schedules and encryption rules to ensure confidential report items are pushed securely to authorized roles.
* **Compliance Archiving & Legal Holds**: Safeguards records with retention timers, cryptographic checksum hashes, and active legal holds preventing automated data purges.

## Directory Structure

```
packages/business-reports/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── report-framework.ts        # Main ReportFramework contract interface
    │   ├── report-context.ts          # Multi-tenant execution session contexts
    │   ├── report-lifecycle.ts        # Status tracks (DRAFT, UNDER_REVIEW, APPROVED, PUBLISHED, ARCHIVED, RETIRED)
    │   └── report-version.ts          # Semantic version numbering and compiling metadata
    ├── identity/
    │   ├── report-id.ts               # Unique report document identifier
    │   ├── report-template-id.ts      # Unique report template composition identifier
    │   └── report-section-id.ts       # Unique chapter section identifier
    ├── reports/
    │   ├── business-report.ts         # Core multi-tenant business report model
    │   ├── executive-report.ts        # High-level strategic and forward-looking board report
    │   ├── operational-report.ts      # Departmental process SLA thresholds metrics summary
    │   └── compliance-report.ts       # Regulatory disclosures governed by legal acts (SOX, MiFID)
    ├── sections/
    │   ├── report-section.ts          # Chapter section typing (markdown, grids, callouts, signoffs)
    │   ├── report-chapter.ts          # Multi-level ordered chapters organizing sections list
    │   └── report-summary.ts          # Audit validation hash and key findings summaries
    ├── templates/
    │   ├── report-template.ts         # Reusable template styles, bounds, and category codes
    │   ├── template-layout.ts         # Margins, page sizing (A4, Letter), and branding options
    │   └── template-binding.ts        # Datasource system connectors (Ledgers, KPIs, Process state)
    ├── publication/
    │   ├── report-publication.ts      # Version audits, compliance certifications, release records
    │   ├── report-distribution.ts     # Target secure destinations list (webhook, SFTP, GPG mailto)
    │   └── report-subscription.ts     # Operator periodic digests and localization preferences
    ├── archive/
    │   ├── report-archive.ts          # Archival status, audit certifications, and scheduled purge timers
    │   ├── retention-policy.ts        # Tax or fiscal retention lengths and legal holds tags
    │   └── archive-reference.ts       # WORM storage platform pointers and file sha256 hashes
    ├── governance/
    │   ├── report-owner.ts            # Accountable operators and secondary departments owners
    │   ├── report-classification.ts   # Confidentiality clearings, watermarks, and security standards
    │   └── report-approval.ts         # Approval workflow step results and reviewer roles log
    └── events/
        ├── report-created.event.ts    # Broadcasted when a report draft document is defined
        ├── report-published.event.ts  # Broadcasted when a report gets published to distributors
        ├── report-archived.event.ts   # Broadcasted when a report gets frozen into compliant vault
        └── report-retired.event.ts    # Broadcasted when a report gets retired from active use
```

## Out of Scope
* PDF generation engines or Excel binary converters.
* Rich printing styling or responsive CSS view components.
* Analytical aggregation queries or dynamic database compilers.
* UI menus, graphs, or chart assets.
