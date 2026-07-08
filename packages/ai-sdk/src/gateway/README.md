# Unified AI Gateway API & Orchestration Pipeline (Phase 3)

The Unified AI Gateway exposes a single, provider-agnostic facade that routes request objects through a sequential 10-stage orchestration pipeline. It maps all responses into neutral, standard models.

## Module Structure

```
packages/ai-sdk/src/gateway/
├── api/
│   ├── ai-gateway-api.ts        # Public API definition & example methods
│   ├── execute-request.ts       # Unified request input parameters
│   └── execute-response.ts      # Provider-independent response model
├── pipeline/
│   ├── execution-pipeline.ts    # Sequential 10-stage workflow engine
│   ├── execution-context.ts     # Request context carrying states & traces
│   └── execution-result.ts      # Output contract of the workflow execution
├── facade/
│   └── ai-facade.ts             # Unifying entry point client
├── health/
│   └── gateway-health.ts        # Service component health monitoring
└── testing/
    ├── provider-mocks.ts        # Simulated provider drivers
    └── gateway-integration.spec.ts # BDD-style validation suite
```

## Execution Pipeline (10 Stages)

Every request executed via the facade triggers a clean, decoupled orchestration pipeline:

1. **Validate Request**: Verifies the structural integrity and presence of required parameters (`tenantId`, `prompt`, or `messages`).
2. **Resolve Prompt**: Normalizes input parameters (either direct strings or conversation messages).
3. **Run Safety Policies**: Executes standard moderation rules on the resolved prompt to block unsafe content.
4. **Select Provider**: Dynamically routes request targets through the registered `ModelRouter`.
5. **Select Model**: Resolves the optimal deployment model based on routing strategies.
6. **Execute Provider**: Interacts with the registered provider instance resolved via the registry.
7. **Stream (optional)**: Generates progressive response segments for interactive, long-running streaming completions.
8. **Record Accounting**: Updates the accounting ledger with estimated token counts and estimated cost parameters.
9. **Record Telemetry**: Transmits timing, performance profiles, and request traces to the telemetry subsystem.
10. **Return Unified Response**: Maps output variables into the neutral, structured `ExecuteResponse` model.

## Unified Response Object

Unlike provider-specific SDK payloads, the `ExecuteResponse` model exposes neutral, provider-agnostic parameters:

* **Content**: The response body string.
* **Metadata**: Operational context mapping model, provider, duration, and timestamp.
* **Usage**: Standard prompt, completion, and total token parameters.
* **Safety**: Security outcome showing safe status and violation summaries.
* **Cost**: Estimated monetary fees split by input/output tokens.
* **Telemetry**: Request execution tracing details.
* **Streaming Information**: Identifiers for partial chunks and stream states.
