# @sbb/types

Central Type System and Domain Contracts library for the **SBB Platform**.

This package contains strict, zero-dependency, runtime-free TypeScript type declarations, interfaces, and enums representing the platform domain.

---

## 🚀 Key Architectural Modules

* **Common**: Core identifiers, timestamp bounds (`Timestamped`, `BaseEntity`), sorting maps, and extensible dictionary payloads.
* **API Wrappers**: Normalized envelopes for single resources, cursor/page paginated collections, and error code catalogs.
* **Identity**: Strongly typed user records, standard roles (`Admin`, `Member`), live tracking sessions, and resource permissions.
* **Organization**: Enterprise multi-tenant workspace nodes, team profiles, and access settings.
* **Tenant Routing**: Domain hosting configurations, system status codes, and billing level features.
* **Audit Tracing**: Compliance logs recording field modification history, severity scales, and initiator details.
* **Workflow Automation**: Task steps, definitions, transition lines, and instance counters.
* **AI Engine**: Message arrays, token counts, cost approximations, and LLM configuration profiles.
* **Integration**: Configurations, synchronizers, state toggles, and secure HMAC webhook contracts.

---

## 💻 Integration Examples

### API Responses & Pagination
```typescript
import { ApiResponse, ApiPaginatedResponse, UserProfile } from '@sbb/types';

// Standard response wrapper
const singleUserResponse: ApiResponse<UserProfile> = {
  success: true,
  data: {
    id: 'usr_9281',
    email: 'user@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    role: UserRole.MEMBER,
    status: UserStatus.ACTIVE,
    emailVerified: true,
    mfaEnabled: false,
    createdAt: '2026-07-02T02:30:00Z',
    updatedAt: '2026-07-02T02:35:00Z'
  },
  timestamp: new Date().toISOString()
};
```

### Conversational AI Messages & Telemetry
```typescript
import { AiMessage, AiMessageRole, AiTokenUsage } from '@sbb/types';

const assistantReply: AiMessage = {
  id: 'msg_f82j19',
  role: AiMessageRole.ASSISTANT,
  content: 'Processing task 4.6 as requested.',
  timestamp: new Date().toISOString()
};

const telemetry: AiTokenUsage = {
  promptTokens: 412,
  completionTokens: 84,
  totalTokens: 496,
  estimatedCostUSD: 0.0012
};
```

### Audit Trace Fields
```typescript
import { AuditTrailEntry, AuditSeverity } from '@sbb/types';

const event: AuditTrailEntry = {
  id: 'aud_82j',
  actor: {
    id: 'usr_091',
    type: 'user',
    email: 'admin@sbb.internal'
  },
  action: 'organization.mfa_enforced',
  category: 'security',
  severity: AuditSeverity.CRITICAL,
  status: 'success',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  changes: [
    {
      field: 'mfaRequired',
      oldValue: false,
      newValue: true
    }
  ]
};
```

---

## ⚠️ Development Principles

1. **Strictly Runtime Free**: This package MUST only contain interfaces, types, and standard enums. Do not add classes, functions, instance variables, utility helpers, or validation logic.
2. **Standard Enums**: Use standard TypeScript enums (`enum`). Do not use `const enum`.
