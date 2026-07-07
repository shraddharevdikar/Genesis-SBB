# API Gateway & Request Pipeline Foundation (GEN-PLATFORM-001)

The **Platform core module** establishes a consistent, robust, and clean request/response pipeline across all corporate services inside SBB.

By providing a single, standardized, framework-compliant execution flow, other business modules automatically benefit from cross-cutting capabilities like Correlation tracking, Performance headers, Structured Error envelopes, and Zod-based request validations.

---

## Architectural Layout

```
platform/
├── context/
│   └── request-context.interface.ts
├── filters/
│   └── global-exception.filter.ts
├── health/
│   ├── health.controller.ts
│   └── health.module.ts
├── interceptors/
│   ├── audit-hook.interceptor.ts
│   ├── metrics.interceptor.ts
│   └── response-transform.interceptor.ts
├── middleware/
│   ├── correlation-id.middleware.ts
│   ├── request-logging.middleware.ts
│   └── request-timing.middleware.ts
├── pipes/
│   └── zod-validation.pipe.ts
├── swagger/
│   └── swagger.config.ts
├── README.md
└── tests/
    └── platform-pipeline.spec.ts
```

---

## Request Pipeline Features

### 1. Middlewares (Inbound Requests)
- **CorrelationIdMiddleware**: Intercepts inbound headers, extracts or generates `X-Correlation-Id` and `X-Request-Id`, binds them to the request state, and sends them back in downstream headers.
- **RequestTimingMiddleware**: Calculates high-precision processing time and appends `X-Response-Time` to response headers.
- **RequestLoggingMiddleware**: Writes structured telemetry log statements detailing the routing actions, request parameters, completion codes, and processing times.

### 2. Pipes & Interceptors (Validation & Response Wrapping)
- **ZodValidationPipe**: Integrates with standard `@sbb/validation` schemas to block invalid parameter structures, formatting issues into structured validation records.
- **ResponseTransformInterceptor**: Resolves outgoing return values into standard platform containers:
  ```json
  {
    "success": true,
    "data": { ... },
    "metadata": { ... },
    "traceId": "corr_xxxxx"
  }
  ```
- **MetricsInterceptor** & **AuditHookInterceptor**: Intercept execution flows to record metrics and trigger compliance logs.

### 3. Filters (Normalized Failure Handlers)
- **GlobalExceptionFilter**: Intercepts unhandled errors, transforming custom framework exceptions (e.g. `AppError`, `ValidationError`, or NestJS HTTP exceptions) into normalized error objects:
  ```json
  {
    "success": false,
    "error": {
      "code": "BAD_REQUEST",
      "message": "Validation failed",
      "details": [ ... ]
    },
    "correlationId": "corr_xxxxx",
    "timestamp": "2026-07-07T00:00:00.000Z"
  }
  ```

### 4. Health Probes
Exposes core deployment checking routes:
- `/health`: Aggregates downstream services checking health states.
- `/health/ready`: Monitors load balancer readiness checks.
- `/health/live`: Basic application loop process checks.

---

## Out of Scope
In alignment with M2 Guidelines, the following items are not implemented:
- Active business controller logic.
- Live database persistence probes.
- User authentication parsing or active token decoding.
