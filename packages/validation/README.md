# @sbb/validation

Centralized Zod Runtime Validation library for the **SBB Platform**.

This package provides strict, zero-dependency, runtime validation schemas and parsing utilities designed to complement `@sbb/types`.

---

## 🚀 Key Architectural Modules

* **Common**: Shared rules for primitives (`UUID`, `Email`, `URL`, `DateTime`), extensible custom metadata structures (`customMetadataSchema`), and standard identifiers (`userIdSchema`, `tenantIdSchema`, `organizationIdSchema`).
* **API Envelopes**: Normalization validation rules for API pagination filters, metadata limits, success wrappers, and error details.
* **Identity**: Data schema validation for user accounts, lifecycle status trackers, and fine-grained role permissions.
* **Organization**: Validation rules protecting team workspaces, billing domains, and user-org subscription limits.
* **Tenant**: Multi-tenant domain maps, resource limits, and service region caps.
* **Audit Traces**: Validating compliance reports, actor origins, and precise data property update differences.
* **Workflow**: Automated process templates, steps, active run instances, and transition tracks.
* **AI Engine**: Message roles, chat formats, model parameters, and token telemetry limits.
* **Integration**: Profiles, third-party connectors, and outgoing webhooks with HMAC validation constraints.

---

## 💻 Integration Examples

### Simple Safety Validation
```typescript
import { validateOrThrow, emailSchema } from '@sbb/validation';

// Throws detailed ZodError if invalid, returns string if valid
const validEmail = validateOrThrow(emailSchema, "developer@sbb.internal");
```

### Safe Parsing
```typescript
import { safeValidate, userProfileSchema } from '@sbb/validation';

const result = safeValidate(userProfileSchema, inputPayload);

if (!result.success) {
  console.error("Validation failed:", result.error.format());
} else {
  const profile = result.data; // Fully typed
}
```

### Namespace Access
```typescript
import { Schemas } from '@sbb/validation';

// Use the grouped namespace
const validationResult = Schemas.api.paginationParams.safeParse(query);
```

---

## ⚠️ Development Principles

1. **Complimentary to `@sbb/types`**: Every Zod schema corresponds to a companion TS type in `@sbb/types`.
2. **Strictly Validation Logic**: No business rules, database queries, ORM setups, or NestJS/React dependencies. Keep it purely functional, fast, and light.
