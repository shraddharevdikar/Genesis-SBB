# @sbb/validation - Source Architecture

This directory houses the strongly typed runtime validations built using Zod for the SBB Platform.

## 🧱 Subdirectories

* **`common/`**: Primitives like UUID, Email, URL, ISO-8601 Date/DateTime, custom recursive metadata, standard entities, and safety helpers.
* **`api/`**: Validation structures for API pagination, response metadata wrappers, success response envelopes, and error response envelopes.
* **`identity/`**: Validations for user status, roles, profiles, active sessions, and permissions.
* **`organization/`**: Rules modeling workspaces, settings, subscription levels, and member mappings.
* **`tenant/`**: Standard schemas validating tenant configurations, billing plans, and resource setting boundaries.
* **`audit/`**: Secure Zod structures verifying severity, event actors, modified field diff structures, and event entries.
* **`workflow/`**: Models validating automated templates, run parameters, instance records, and transition logs.
* **`ai/`**: Verification for message roles, structured chat arrays, engine telemetry, and user AI sessions.
* **`integration/`**: Verification schemas for platform links, active states, webhooks, and syncing diagnostics logs.
* **`schemas/`**: A central namespace aggregator grouping all Zod validation schemas for simple usage.

## ⚠️ Standards

1. **Strictly Runtime Validation**: Only define pure Zod schemas and validation/safe parsing helpers. No business logic, authorization mechanisms, database integrations, or framework modules.
2. **ESM Compliance**: Use explicit `.js` extensions for local file imports.
3. **No Circular Dependencies**: Ensure modular design prevents importing subdirectories from each other.
