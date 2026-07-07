# Intelligent Model Router Subsystem

This module implements the core routing infrastructure of the SBB AI Platform. It provides a robust, provider-agnostic framework for selecting the optimal AI provider and model based on capabilities, task complexities, and multi-tenant policies.

## Structure

```
packages/ai-sdk/src/routing/
├── router/
│   ├── model-router.ts
│   ├── routing-engine.ts
│   └── routing-decision.ts
├── policy/
│   ├── routing-policy.ts
│   ├── tenant-policy.ts
│   ├── cost-policy.ts
│   ├── latency-policy.ts
│   ├── quality-policy.ts
│   ├── region-policy.ts
│   └── safety-policy.ts
├── capability/
│   ├── ai-capability.ts
│   └── task-complexity.ts
├── selection/
│   ├── provider-selector.ts
│   └── model-selector.ts
├── strategy/
│   ├── routing-strategy.ts
│   └── fallback-strategy.ts
└── events/
    ├── routing-completed.event.ts
    └── routing-failed.event.ts
```

## Core Abstractions

### AI Capability & Task Complexity
* `AICapability`: Strongly typed capabilities including Chat, Reasoning, Planning, Coding, Embedding, Vision, Image Generation, Audio, Speech, Translation, Summarization, Classification, and Extraction.
* `TaskComplexity`: Resource classifications for routing: `Low`, `Medium`, `High`, and `Expert`.

### Routing Policies
* `CostPolicy`: Budget constraints, threshold alerts, and token cost caps.
* `LatencyPolicy`: Target latency, timeouts, and failover options on slow responses.
* `QualityPolicy`: Minimum supported complexity and expert model preferences.
* `RegionPolicy`: Data residency rules and regional transfer restrictions.
* `SafetyRoutingPolicy`: Content moderation scores, prompt safety thresholds, and PII blocking flags.

### Selection Contracts
* `ProviderSelector`: Standard selector interface matching capability, region, cost, and priority.
* `ModelSelector`: Custom model resolver allowing business modules to execute without referencing model strings directly.

### Routing & Fallback Strategies
* `RoutingStrategy`: Clean design interface for custom route engines (e.g. Cost-optimized, Quality-optimized).
* `FallbackStrategy`: Pre-defined configuration storing primary and secondary providers with corresponding retry/backoff parameters.
