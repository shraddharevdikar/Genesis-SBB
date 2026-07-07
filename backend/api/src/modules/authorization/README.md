# Authorization Foundation Module (GEN-ID-008)

The **Authorization Module** implements the core Domain-Driven Design (DDD) model for Role-Based Access Control (RBAC) and Policy-Based Access Control (PBAC) within the SBB Platform. 

It defines core system entities, immutable value objects, repository interfaces, placeholder services, and lifecycle events, establishing a robust foundation for permission evaluation without tying itself to specific database engines or delivery mechanisms.

---

## Architectural Layout

```
authorization/
├── application/
│   ├── commands/
│   │   └── assign-role.command.ts
│   ├── handlers/
│   │   └── assign-role.handler.ts
│   ├── dto/
│   │   └── assign-role.dto.ts
│   └── services/
│       └── authorization-application.service.ts
├── domain/
│   ├── entities/
│   │   ├── role.entity.ts
│   │   ├── permission.entity.ts
│   │   └── policy.entity.ts
│   ├── value-objects/
│   │   ├── role-id.value-object.ts
│   │   ├── permission-id.value-object.ts
│   │   └── policy-id.value-object.ts
│   ├── repositories/
│   │   ├── role-repository.interface.ts
│   │   ├── permission-repository.interface.ts
│   │   └── policy-repository.interface.ts
│   ├── services/
│   │   ├── authorization.service.ts
│   │   └── policy-evaluation.service.ts
│   ├── policies/
│   ├── events/
│   │   ├── role-created.event.ts
│   │   ├── permission-granted.event.ts
│   │   └── policy-created.event.ts
│   └── exceptions/
│       ├── role-not-found.exception.ts
│       └── permission-not-found.exception.ts
├── infrastructure/
│   ├── repositories/
│   │   ├── in-memory-role.repository.ts
│   │   ├── in-memory-permission.repository.ts
│   │   └── in-memory-policy.repository.ts
│   ├── policy-engine/
│   │   └── mock-policy-engine.service.ts
│   └── mappers/
│       └── authorization-mapper.ts
├── presentation/
│   └── dto/
│       └── authorization-response.dto.ts
└── tests/
    └── authorization.spec.ts
```

---

## Domain Model Design

### 1. Value Objects
All identifiers are strongly-typed, immutable value objects protecting domain invariants:
* **RoleId**: Uniquely identifies a role.
* **PermissionId**: Uniquely identifies a permission resource.
* **PolicyId**: Uniquely identifies an evaluation policy statement.

### 2. Core Entities & Aggregate Roots
* **Role**: Aggregate Root representing a collection of privileges. Exposes behaviors to `grantPermission` and `revokePermission`.
* **Permission**: Entity defining a system-level permission claim or resource key.
* **Policy**: Aggregate Root supporting a highly-flexible JSON-style policy structure containing:
  - **Resource**: The target elements (e.g. `workspace:documents:*`).
  - **Action**: Allowed/Denied operations (e.g. `workspace:read`).
  - **Effect**: Explicit `Allow` or `Deny` resolution.
  - **Conditions**: Advanced context evaluations (e.g., checking environment day-of-week).

---

## Domain Events

Placeholder events capture state mutations:
* `RoleCreatedEvent`: Fired upon role definition.
* `PermissionGrantedEvent`: Fired when a role receives a new permission constraint.
* `PolicyCreatedEvent`: Fired when a new PBAC policy statement is deployed.

---

## Out of Scope

In alignment with Milestone M1 requirements, the following features are not implemented:
* Direct permission evaluation engine execution.
* Database models or active schema integrations.
* JWT claim bindings.
* REST API Controllers or authentication filters.
* UI components.
