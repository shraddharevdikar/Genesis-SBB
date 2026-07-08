# AI Cost & Token Accounting Subsystem

This module implements the core accounting and token tracking foundation of the SBB AI Platform. It provides a provider-agnostic, multi-tenant ready architecture to monitor, estimate, and record token consumption, costs, budgets, and quotas across tenants, organizations, modules, and users.

## Structure

```
packages/ai-sdk/src/accounting/
├── tokens/
│   ├── token-usage.ts
│   └── token-breakdown.ts
├── cost/
│   ├── cost-estimate.ts
│   ├── cost-record.ts
│   └── pricing-policy.ts
├── budgets/
│   ├── ai-budget.ts
│   ├── budget-policy.ts
│   └── budget-alert.ts
├── quotas/
│   ├── usage-quota.ts
│   └── quota-policy.ts
├── analytics/
│   ├── usage-summary.ts
│   ├── provider-usage.ts
│   └── model-usage.ts
├── tracking/
│   ├── usage-tracker.ts
│   └── accounting-engine.ts
└── events/
    ├── token-usage-recorded.event.ts
    ├── budget-exceeded.event.ts
    └── quota-reached.event.ts
```

## Core Abstractions

### Token Usage & Breakdown
* `TokenUsage`: Defines fields for `inputTokens`, `outputTokens`, `cachedTokens` (future), and `totalTokens`.
* `TokenBreakdown`: Structural metadata breaking down prompt sources (system prompts, user query, tools, history) and generation segments (reasoning, text generation, tool calls).

### Cost Records & Pricing Policies
* `CostRecord`: A multi-tenant, immutable tracking record capturing tenant, org, user, module, provider, model, version, capability, estimated/actual costs, currency, and timestamps.
* `PricingPolicy`: Provider-agnostic rate configuration and lookup matching tenant tiers and pricing model matrices.

### Budgets & Quotas
* `AIBudget`: Budget scope tracker supporting `TENANT`, `ORGANIZATION`, `DEPARTMENT`, and `PROJECT` levels with period definitions (`daily`, `weekly`, `monthly`, `yearly`).
* `UsageQuota`: Rate-limiting structures enforcing daily, weekly, or monthly request limits and token thresholds.

### Tracking & Accounting Engine
* `AccountingEngine`: Orchestration engine to track, record, and generate analytics stubs without actual DB or Stripe hooks. Offers complete capability and provider aggregates.

### Event Models
* `TokenUsageRecordedEvent`: Dispatched when token consumption is successfully accounted for.
* `BudgetExceededEvent`: Raised when a specific budget scope exceeds its designated thresholds.
* `QuotaReachedEvent`: Dispatched when rate-limiting request or token quotas are maxed out.
