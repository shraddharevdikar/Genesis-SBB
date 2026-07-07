# Prompt Management System

This module implements the enterprise Prompt Management System for the SBB Platform. Prompts are treated as governed platform assets with versioning, categorizations, approval workflows, experiments (A/B testing), and events.

## Structure

```
packages/ai-sdk/src/prompts/
├── templates/
│   ├── prompt-template.ts
│   ├── prompt-category.ts
│   └── prompt-purpose.ts
├── versions/
│   ├── prompt-version.ts
│   ├── prompt-status.ts
│   └── prompt-history.ts
├── registry/
│   ├── prompt-registry.ts
│   └── prompt-descriptor.ts
├── approval/
│   ├── prompt-approval.ts
│   └── approval-status.ts
├── metadata/
│   └── prompt-metadata.ts
├── ab-testing/
│   └── prompt-experiment.ts
└── events/
    ├── prompt-created.event.ts
    ├── prompt-published.event.ts
    └── prompt-deprecated.event.ts
```

## Core Abstractions

### Templates & Categorization
* `PromptTemplate`: The central asset mapping dynamic variables and versions.
* `PromptCategory`: Distinguishes prompt roles (`SYSTEM`, `INSTRUCTION`, `CLASSIFICATION`, etc.).
* `PromptPurpose`: Identifies prompt intentions (`GENERAL`, `SAFETY_GUARDRAIL`, `RAG_CONTEXT`, etc.).

### Versioning & Lifecycle
* `PromptVersion`: Represents immutable versions.
* `PromptStatus`: Tracks states (`Draft`, `Review`, `Approved`, `Active`, `Deprecated`, `Archived`).
* `PromptHistory`: Represents changelogs and transition audit history.

### Governance & Registry
* `PromptRegistry`: Memory-based registrar for templates and lookups.
* `PromptApproval`: Structural model for reviewer records and decisions.
* `PromptExperiment`: A/B testing variants allocation definitions.
