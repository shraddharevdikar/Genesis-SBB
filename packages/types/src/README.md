# @sbb/types - Source Architecture

This directory houses the strongly typed interfaces, types, and standard enums representing the core domain models of the SBB Platform.

## 🧱 Subdirectories

* **`common/`**: Base entities, standard timestamp definitions, custom metadata slots, and dictionary helpers.
* **`api/`**: Uniform wrapper structures for standard single/paginated responses, pagination limits, and error payloads.
* **`identity/`**: Structural maps for user profiles, roles, security sessions, and access permissions.
* **`organization/`**: Team workspaces, tenant subscription tiers, membership logs, and organizational controls.
* **`tenant/`**: Standard schemas tracking multi-tenant deployment constraints, region filters, and billing tiers.
* **`audit/`**: Robust trace models recording modifications, compliance events, field differences, and system actions.
* **`workflow/`**: Automated execution loops, process templates, active execution states, and audit trails.
* **`ai/`**: Models, token cost telemetry, message histories, and system instructions for AI pipeline steps.
* **`integration/`**: External connectors, custom outgoing/incoming webhooks, and synchronization run summaries.

## ⚠️ Standards

1. **Pure TypeScript**: No classes, functions, controllers, runtime implementations, validation schemes, or framework modules.
2. **ESM Compliance**: Explicit `.js` imports for submodules when referencing local types.
3. **Enum Declaration**: Standard TypeScript enums (`enum`) only. Never use `const enum`.
