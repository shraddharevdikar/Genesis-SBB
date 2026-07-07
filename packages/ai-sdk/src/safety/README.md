# AI Safety & Moderation Framework

This module implements the enterprise-grade AI Safety and Moderation framework for the SBB Platform. It provides a robust, multi-tenant ready architecture to govern every AI request and response before it enters or leaves the platform boundaries.

## Structure

```
packages/ai-sdk/src/safety/
├── policies/
│   ├── safety-policy.ts
│   ├── policy-registry.ts
│   └── policy-descriptor.ts
├── moderation/
│   ├── moderation-engine.ts
│   ├── moderation-request.ts
│   └── moderation-result.ts
├── validation/
│   ├── input-validator.ts
│   ├── output-validator.ts
│   └── prompt-validator.ts
├── classification/
│   ├── risk-level.ts
│   ├── safety-category.ts
│   └── safety-classifier.ts
├── approval/
│   ├── human-approval-policy.ts
│   └── approval-decision.ts
├── redaction/
│   ├── pii-redactor.ts
│   └── secret-redactor.ts
└── events/
    ├── moderation-passed.event.ts
    ├── moderation-blocked.event.ts
    └── human-review-required.event.ts
```

## Core Abstractions

### Safety Policies & Descriptors
* `SafetyPolicy`: The operational policy contract capturing specific thresholds across categories, PII-blocking toggles, etc.
* `InputPolicy`, `OutputPolicy`, `PromptPolicy`, `SafetyTenantPolicy`, `CompliancePolicy`: Distinct, modular safety constraints defining input/output lengths, system guardrails, language targets, and compliance properties.
* `SafetyPolicyRegistry`: Memory-based registry to manage and fetch policies dynamically.

### Moderation Engine & Validation
* `ModerationEngine`: The brain of the safety framework. Orchestrates prompt, input, and output validation, executes risk and safety classifiers, and returns moderation results alongside appropriate mitigation decisions.
* `PromptValidator`, `InputValidator`, `OutputValidator`: Interface contracts guarding against structurally invalid payloads, prompt injection, and output corruptions.

### Classification & Risk Levels
* `RiskLevel`: Standardized classification levels (`None`, `Low`, `Medium`, `High`, `Critical`).
* `SafetyCategory`: Strongly typed categories including `Hate`, `Violence`, `Self-Harm`, `Sexual`, `Harassment`, `Malware`, `Fraud`, `PII`, `Confidential Data`, `Copyright`, and `Regulatory`.

### Human Approval & Redaction
* `HumanApprovalPolicy`: Direct policy contracts tracking escalation levels, required reviewer lists, and minimum approval constraints.
* `PIIRedactor`, `SecretRedactor`: Sensitive business data masking and secret/DLP redaction interfaces.

### Event Models
* `ModerationPassedEvent`: Triggered upon successful clearance of content checks.
* `ModerationBlockedEvent`: Raised when content triggers threshold violations.
* `HumanReviewRequiredEvent`: Raised when classification requires manual eyes before execution.
