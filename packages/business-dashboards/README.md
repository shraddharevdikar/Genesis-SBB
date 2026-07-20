# Enterprise Business Dashboards Framework (BOSF-010)

The Enterprise Business Dashboards Framework module defines SBB's core domain-independent corporate dashboard configurations, dashboard view composition structures, multi-level layout options (e.g. standard grid, bento box gallery), reusable widgets with custom external data source bindings (retaining references without calculating the metrics or running analytics), user personalization profiles (bookmarks, themes), drill-down action navigation hierarchies, access control governance rules, and release publication audits of the **Business Operating System Framework (BOSF)**.

This module is completely reusable and is inherited by domain-specific subsystems like `MarketingOS`, `SalesOS`, `FinanceOS`, `HROS`, `LegalOS`, `OperationsOS`, etc., to structure corporate interfaces and workflow controls separate from dynamic rendering frameworks or dynamic query-compilers.

## Architectural Principles
* **Declarative Dashboards Representation**: Dashboards represent structural layout metadata, grid positions, and data source bindings rather than hardcoded UI cards, graph libraries (e.g. Recharts, D3), or analytics query engines.
* **Separation of Dashboard Views and Reporting**: Dashboards structure operational, executive, and AI workforce visual workspaces. They do not calculate analytics or run reports themselves.
* **Granular Personalization Profile Tracks**: Outlines fully audited operator preference stores to persist bookmarks, favorite layouts, custom themes (light, dark, high contrast), and default landing pages.
* **Audit-Approved Governance Gates**: Every dashboard version includes detailed owner assignments, access control policies (roles allowed vs restricted), and board approval publications history prior to activation.

## Directory Structure

```
packages/business-dashboards/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── dashboard-framework.ts     # Main DashboardFramework contract interface
    │   ├── dashboard-context.ts       # Multi-tenant execution session contexts
    │   ├── dashboard-lifecycle.ts     # Status tracks (DRAFT, UNDER_REVIEW, PUBLISHED_ACTIVE, DEPRECATED, RETIRED)
    │   └── dashboard-version.ts       # Semantic version numbering and operators log
    ├── identity/
    │   ├── dashboard-id.ts            # Unique dashboard blueprint identifier
    │   ├── dashboard-view-id.ts       # Unique dashboard view tab identifier
    │   └── widget-id.ts               # Unique dashboard widget instance identifier
    ├── dashboards/
    │   ├── business-dashboard.ts      # Core multi-tenant dashboard model
    │   ├── executive-dashboard.ts     # High-level strategical bento-style targets dashboard
    │   ├── operational-dashboard.ts   # Real-time workflow queues, alerts, process step SLA metrics
    │   └── department-dashboard.ts    # Department-level and role-specific widgets dashboards
    ├── views/
    │   ├── dashboard-view.ts          # Page tabs container, layout definitions, and sections mapping
    │   ├── dashboard-layout.ts        # Dynamic compositions (STANDARD_FLUID_GRID, BENTO_TILE_GALLERY, etc.)
    │   └── dashboard-section.ts       # Grid column span and sorting indices of widget groups
    ├── widgets/
    │   ├── dashboard-widget.ts        # Widget definitions and configurations mapping
    │   ├── widget-definition.ts       # Type categories (KPI, KNOWLEDGE, WORKFLOW, ALERT, etc.)
    │   ├── widget-binding.ts          # External data sources pointers (KPI engine, Knowledge graph)
    │   └── widget-configuration.ts    # Visual settings (refresh rate, hex color, custom display modes)
    ├── personalization/
    │   ├── dashboard-profile.ts       # Operator active profiles and filters lists
    │   ├── dashboard-preference.ts    # Operator bookmarks, default views, and theme choices
    │   └── dashboard-filter.ts        # Filter operator rules (IN_SET, BETWEEN_RANGE, EQUALS, etc.)
    ├── navigation/
    │   ├── dashboard-navigation.ts    # Menus, sidebar item links, and custom role permissions
    │   ├── dashboard-drilldown.ts     # Interaction actions (transition to subview, modal popup, etc.)
    │   └── dashboard-shortcut.ts      # Quick launching links to SBB workflow processes
    ├── governance/
    │   ├── dashboard-owner.ts         # Accountable operators and secondary backups
    │   ├── dashboard-access-policy.ts # Security levels and restricted/allowed operator roles list
    │   └── dashboard-publication.ts   # Signed board resolutions logs and compliance audits
    └── events/
        ├── dashboard-created.event.ts # Broadcasted when dashboard blueprint is defined
        ├── dashboard-published.event.ts # Broadcasted when dashboard is published to operators
        ├── dashboard-updated.event.ts # Broadcasted when widget layout configurations change
        └── dashboard-retired.event.ts # Broadcasted when dashboard is sunsetted
```

## Out of Scope
* Actual frontend UI components, rendering canvases, or dashboard templates.
* Concrete charts libraries integrations (e.g. recharts, d3, chart.js).
* Analytical calculation queries, database triggers, or report writers.
* Dynamic query parser compilers, API router endpoints, or local databases.
