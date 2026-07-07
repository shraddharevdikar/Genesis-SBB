# Session Management Foundation Module (GEN-ID-009)

The **Session Management Module** implements the core Domain-Driven Design (DDD) model for user session lifecycles, active device tracking, and state mutation triggers within the SBB Platform. 

Designed in alignment with Milestone M1, it outlines strong value object mappings, strict status check invariants, and custom exceptions to secure long-term browser and client sessions.

---

## Architectural Layout

```
session/
├── application/
│   ├── commands/
│   │   ├── create-session.command.ts
│   │   └── revoke-session.command.ts
│   ├── handlers/
│   │   ├── create-session.handler.ts
│   │   └── revoke-session.handler.ts
│   ├── dto/
│   │   └── create-session.dto.ts
│   └── services/
│       └── session-application.service.ts
├── domain/
│   ├── entities/
│   │   ├── session-status.enum.ts
│   │   └── session.entity.ts
│   ├── value-objects/
│   │   ├── session-id.value-object.ts
│   │   └── device-id.value-object.ts
│   ├── repositories/
│   │   └── session-repository.interface.ts
│   ├── services/
│   │   └── session-management.service.ts
│   ├── events/
│   │   ├── session-created.event.ts
│   │   ├── session-revoked.event.ts
│   │   └── session-expired.event.ts
│   └── exceptions/
│       ├── session-not-found.exception.ts
│       └── session-expired.exception.ts
├── infrastructure/
│   ├── repositories/
│   │   └── in-memory-session.repository.ts
│   └── mappers/
│       └── session-mapper.ts
├── presentation/
│   └── dto/
│       └── session-response.dto.ts
└── tests/
    └── session.spec.ts
```

---

## Domain Model Design

### 1. Value Objects
* **SessionId**: Immutable string identifier representing a unique web/mobile session.
* **DeviceId**: Immutable identifier defining the client device used for authentication.

### 2. Session Status Lifecycle
The `SessionStatus` state machine manages:
* **Active**: Session is valid and can register new user touchpoints.
* **Expired**: Session has passed its static lifespan threshold (`expiresAt`).
* **Revoked**: Session has been explicitly killed by the user or an administrative actor.

### 3. Session Entity Behaviors
The `Session` aggregate root governs internal properties using rich DDD behaviors:
- `recordAccess(now)`: Updates the `lastAccessedAt` field or automatically throws an error and transitions to `Expired` if the deadline has passed.
- `revoke(now)`: Instantly deactivates the session, logging the revocation timestamp.
- `expire(now)`: Transitions an active session to an expired state and fires downstream event logs.

---

## Domain Events

Placeholder events capture session lifecycle events:
* `SessionCreatedEvent`: Emitted upon aggregate instantiation.
* `SessionRevokedEvent`: Emitted on manual session termination.
* `SessionExpiredEvent`: Emitted when an expiration check fails and changes state.

---

## Out of Scope

In alignment with Milestone M1 requirements, the following features are not implemented:
* Direct JWT validation or cryptographically signed session verification.
* Database models, active Prisma bindings, or Redis storage integration.
* Login, logout, or register routes.
* Device fingerprint generation.
