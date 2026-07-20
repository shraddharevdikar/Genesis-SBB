# SBB MarketingOS Foundation (BOSF-016)

The **MarketingOS** Foundation module defines SBB's core domain-specific structures, campaign strategies, optimization pipelines, lead funnels, and marketing-specific governance policies of the **Business Operating System Framework (BOSF)**.

This module is the first Business Operating System built completely on top of SBB's foundational business modules (`@sbb/business-foundation`, `@sbb/business-workflows`, `@sbb/business-performance`, `@sbb/business-integrations`, etc.).

## Architectural Principles
* **Declarative Campaign Management**: Rather than executing marketing actions (like calling Google Ads or Meta Ads APIs), MarketingOS structures campaign entities, objectives, budgets, timelines, and budgets declaratively.
* **Modern Channel Optimization**: Includes native modeling of traditional channels (SEO, Paid Media, Email, Social, Affiliate) and next-generation discovery vectors:
  * **GEO (Generative Engine Optimization)**: Managing brand citations, sentiments, and conversational shares of voice across LLM systems.
  * **AEO (Answer Engine Optimization)**: Optimizing structured schema markup, answering snippets, and voice assistant search terms.
* **Autonomous AI Optimization**: Standardizes schemas for AI recommendations, performance drop insights, and automated bid reallocations.

## Directory Structure

```
packages/marketing-os/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── marketing-framework.ts     # Main MarketingFramework service contract
    │   ├── marketing-context.ts       # Timezone-aware multi-tenant context sessions
    │   └── marketing-lifecycle.ts     # Campaign lifecycle states (DRAFT, ACTIVE, PAUSED, etc.)
    ├── strategy/
    │   ├── marketing-strategy.ts      # Multi-tenant strategy tier profiles
    │   ├── campaign-strategy.ts       # Messaging pillars and brand voice guides
    │   └── audience-strategy.ts       # Ideal Customer Profiles (ICPs) and TAM metrics
    ├── campaigns/
    │   ├── marketing-campaign.ts      # Core parent marketing campaign model
    │   ├── campaign-objective.ts      # Volume/pipeline objectives and metric goals
    │   ├── campaign-budget.ts         # Budget caps, spend limit rules, and pacing logs
    │   └── campaign-timeline.ts       # Campaign schedules and extension markers
    ├── channels/
    │   ├── seo-channel.ts             # Search Engine Optimization keywords and rankings
    │   ├── geo-channel.ts             # Generative Engine Optimization mentions and citations
    │   ├── aeo-channel.ts             # Answer Engine Optimization faq pages and schema markups
    │   ├── paid-media-channel.ts      # PPC accounts and ad creatives specifications
    │   ├── social-media-channel.ts    # Brand social handles and scheduled posts lists
    │   ├── email-channel.ts           # Subscriber segments and html email templates
    │   └── affiliate-channel.ts       # Affiliate partner profiles and commission rules
    ├── content/
    │   ├── content-plan.ts            # Content production plans and goals
    │   ├── content-calendar.ts        # Scheduled publishing entries and dates
    │   └── content-asset.ts           # Blog, case study, whitepaper, and video files metadata
    ├── lead-generation/
    │   ├── lead-funnel.ts             # Conversion stages from visitor to customer
    │   ├── lead-source.ts             # Original source tracking via UTM keys
    │   └── conversion-model.ts        # Multi-touch attribution weight events
    ├── analytics/
    │   ├── marketing-dashboard.ts     # Visual widgets layout grid configuration
    │   ├── marketing-report.ts        # Multi-quarter ROAS spend summaries
    │   └── marketing-kpis.ts          # Structured CAC, ROAS, and MQL KPI metrics
    ├── ai/
    │   ├── marketing-ai-agent.ts      # Autonomous copywriting and bidding safeguards
    │   ├── optimization-recommendation.ts # Shift and reallocation suggestions from AI
    │   └── campaign-insight.ts        # Outlier performance peaks and pacing insights
    ├── governance/
    │   ├── marketing-owner.ts         # Accountable departments and certified agency partners
    │   └── marketing-policy.ts        # Risk classifications (GDPR, CAN-SPAM)
    └── events/
        ├── campaign-created.event.ts  # Emitted when a campaign is cataloged
        ├── campaign-launched.event.ts # Emitted when a campaign starts running
        ├── campaign-completed.event.ts # Emitted when a campaign reaches its timeline end
        └── campaign-optimized.event.ts # Emitted when AI recommendations are applied
```

## Out of Scope
* Actual Google Ads, Meta Ads, or LinkedIn Ads SDK integrations.
* SEO scrapers, crawling engines, or search APIs.
* Generative text prompt engineering or active content generators.
* Graphical dashboards, flowcharts, or user interfaces.
