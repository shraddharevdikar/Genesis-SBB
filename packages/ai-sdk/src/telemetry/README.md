# AI Telemetry Foundation

This module implements the core telemetry, metrics logging, user feedback capturing, and performance reporting layer for the SBB AI Gateway. It provides a multi-tenant ready, highly decoupled tracking architecture. Business modules and operations dashboards can inspect granular telemetry logs without depending on concrete cloud backends, Grafana, Prometheus, or external SDK wrappers.

## Structure

```
packages/ai-sdk/src/telemetry/
├── tracking/
│   ├── telemetry-context.ts
│   ├── telemetry-recorder.ts
│   └── telemetry-engine.ts
├── events/
│   ├── ai-request-event.ts
│   ├── ai-routing-event.ts
│   ├── ai-provider-event.ts
│   ├── ai-response-event.ts
│   └── ai-feedback-event.ts
├── metrics/
│   ├── ai-metric.ts
│   ├── latency-metric.ts
│   ├── quality-metric.ts
│   └── usage-metric.ts
├── feedback/
│   ├── feedback-rating.ts
│   └── user-feedback.ts
├── analytics/
│   ├── ai-session.ts
│   ├── provider-performance.ts
│   ├── model-performance.ts
│   └── prompt-performance.ts
└── reports/
    └── telemetry-summary.ts
```

## Core Abstractions

### Telemetry Context Trace
* `TelemetryContext`: Captures trace metadata including `requestId`, `correlationId`, `tenantId`, `organizationId`, `userId`, `sessionId`, `streamId`, `providerId`, `modelId`, `promptVersion`, and `capability`.

### Event Contracts
* `ai-request-event.ts`: Tracks Request Started, Request Completed, and Request Failed states with precise durations.
* `ai-routing-event.ts`: Traces core routing selection, cataloging selected provider algorithms and template selection versions.
* `ai-provider-event.ts`: Logs moderation milestones, capturing compliance/safety pass flags and category block details.
* `ai-response-event.ts`: Logs raw streaming performance (number of chunks, response duration).
* `ai-feedback-event.ts`: Handles recorded feedback tracking events.

### Metrics Modeling
* `AIMetric`: Standardizes numeric measurements with a generic timestamped structure.
* `LatencyMetric`: Supports detailed latency tracking, including retry attempt count and time-to-first-byte measurements.
* `QualityMetric`: Captures quality evaluation coefficients, success/error percentages, and safety blocks.
* `UsageMetric`: Logs input/output token metrics and total cost figures.

### Feedback Capture
* `FeedbackRating`: Models simple binary thumbs up/thumbs down (`POSITIVE` or `NEGATIVE`) scales.
* `UserFeedback`: Represents complete end-user evaluations containing numerical scores, textual commentary, and submission times.

### Analytical Reports
* `TelemetrySummary`: Structured summaries profiling system-wide performance indices by provider, model, capabilities, and prompt templates.
