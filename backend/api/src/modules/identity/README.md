# Identity Module Foundation (DDD Architecture)

## Module Purpose
The **Identity Module** is the core foundational security layer for the **SBB Platform**. It is responsible for establishing trust, authenticating principals (users, services), issuing session tokens, managing MFA requirements, and enforcing authorization policies.

This module is architected using **Domain-Driven Design (DDD)** and **Clean Architecture** principles to isolate security-sensitive workflows from standard business domains, establishing a strict, robust boundary.

---

## Folder Organization & DDD Layers

Following the architectural review specifications (FAR-001) and M1 core principles, the module is divided into four distinct concentric layers:

```text
backend/api/src/modules/identity/
├── domain/                      # Core business models, values, and policies (No dependencies)
│   ├── entities/                # DDD Entities and Aggregate Roots
│   │   ├── identity-root.entity.ts
│   │   ├── user.entity.ts       # User aggregate root with Status enum state machine
│   │   └── organization.entity.ts # Organization aggregate root with Status enum
│   ├── value-objects/           # Immutable self-validating values
│   │   ├── email-address.value-object.ts
│   │   ├── identity-id.value-object.ts
│   │   ├── user-id.value-object.ts
│   │   ├── display-name.value-object.ts
│   │   ├── organization-id.value-object.ts
│   │   └── organization-name.value-object.ts
│   ├── repositories/            # Explicit persistence contracts
│   │   ├── identity.repository.interface.ts
│   │   ├── user.repository.ts   # IUserRepository abstraction contract
│   │   └── organization.repository.ts # IOrganizationRepository abstraction contract
│   ├── events/                  # Immutable state change notification schemas
│   │   ├── identity-created.event.ts
│   │   ├── user-created.event.ts
│   │   ├── user-activated.event.ts
│   │   ├── user-deactivated.event.ts
│   │   ├── organization-created.event.ts
│   │   ├── organization-updated.event.ts
│   │   └── organization-deactivated.event.ts
│   ├── services/                # Domain-specific services managing complex invariants
│   │   ├── identity-domain.service.ts
│   │   ├── user-domain.service.ts # Evaluates email uniqueness across storage bounds
│   │   └── organization-domain.service.ts # Evaluates organization name uniqueness
│   ├── policies/                # Discrete rule engines and invariants evaluation
│   │   └── identity.policy.ts
│   └── exceptions/              # Specialized domain exceptions
│       ├── identity-domain.exception.ts
│       ├── duplicate-email.exception.ts
│       ├── invalid-user.exception.ts
│       ├── duplicate-organization.exception.ts
│       └── invalid-organization.exception.ts
│
├── application/                 # Orchestration of domain tasks, commands, and queries (CQRS)
│   ├── commands/                # Write action request payloads
│   │   ├── create-identity.command.ts
│   │   ├── create-user.command.ts
│   │   └── create-organization.command.ts
│   ├── queries/                 # Read action request payloads
│   │   └── get-identity.query.ts
│   ├── handlers/                # Request processing and execution orchestrators
│   │   ├── create-identity.handler.ts
│   │   ├── create-user.handler.ts
│   │   └── create-organization.handler.ts
│   ├── dto/                     # Application-level serialization Data Transfer Objects
│   │   ├── identity-response.dto.ts
│   │   ├── create-user.dto.ts
│   │   └── create-organization.dto.ts
│   └── services/                # Orchestration services invoking domain and repository layers
│       ├── identity-application.service.ts
│       ├── user-application.service.ts
│       └── organization-application.service.ts
│
├── infrastructure/              # Low-level technology adapters and database persistence
│   └── persistence/
│       ├── prisma/
│       │   └── repositories/    # Prisma-backed repository adapters
│       │       ├── prisma-identity.repository.ts
│       │       ├── prisma-user.repository.ts
│       │       └── prisma-organization.repository.ts
│       └── mappers/             # Map between database rows and domain aggregate state
│           ├── identity.mapper.ts
│           ├── user.mapper.ts
│           └── organization.mapper.ts
│
├── presentation/                # Outer interface boundaries for inbound requests
│   ├── rest/                    # REST Controllers exposing versioned v1 routes
│   │   └── dto/                 # HTTP payload models and inputs validation schemas
│   └── graphql/                 # GraphQL Resolvers and query schemas
│
├── tests/                       # Unit specs and behavior validation suites
│   ├── identity-module.spec.ts
│   ├── user-aggregate.spec.ts   # Validation of User aggregate invariants, states, and handlers
│   └── organization-aggregate.spec.ts # Validation of Organization aggregate invariants and handlers
│
└── identity.module.ts           # Main NestJS module declaring providers and bindings
```

---

## Core DDD Design Principles

1. **Aggregates and Entities**: Entities possess identities and state, while Aggregate Roots act as gateways to coordinate consistent operations within their domain.
2. **Value Objects**: Immutable, self-contained constructs that contain zero identities but encapsulate business invariants (e.g., validating email structure and display names on creation).
3. **Repository Pattern**: Prevents domain models from directly referencing database schemas or ORM clients. Interfaces define the contract, while infrastructure repositories implement them.
4. **Decoupled Communications**: Application handlers trigger changes, and the system publishes explicit `Domain Events` to keep other microservices asynchronously updated.

---

## User Aggregate Specification (GEN-ID-002)

The **User Aggregate** represents a core business entity within the platform (excluding authentication and raw credential/password fields, which remain isolated under the authentication boundary).

### Model Schema
* **UserId**: Immutable self-validating unique identifier.
* **EmailAddress**: Validated, unique, required email string.
* **DisplayName**: Validated, non-empty, required string.
* **Status**: Represents the lifecycle of the user profile:
  * `Pending`: State immediately upon registration, waiting for activation.
  * `Active`: Active profile capable of interaction.
  * `Suspended`: Temporarily locked state due to security or administrative reasons.
  * `Disabled`: Terminal or deactivated status.
* **CreatedAt / UpdatedAt**: Domain timestamps indicating profile history.

### Business Rules & Invariants
* **Email Valid**: Must follow syntactic rules (enforced by `EmailAddress` value object).
* **Display Name Valid**: Minimum length constraints (enforced by `DisplayName` value object).
* **UserId Immutability**: Protected through TS readonly properties; cannot be updated.
* **Email Uniqueness**: Enforced across storage borders by the `UserDomainService`.

---

## Organization Aggregate Specification (GEN-ID-003)

The **Organization Aggregate** models an SBB business organization independently of billing, members, and relational database details.

### Model Schema
* **OrganizationId**: Immutable self-validating unique identifier.
* **OrganizationName**: Required name string, validated for minimal size.
* **OrganizationStatus**: Represents the organization's lifecycle:
  * `Pending`: Waiting for verification or setup steps.
  * `Active`: Operational and active business organization.
  * `Suspended`: Locked or temporarily blocked due to compliance or terms.
  * `Archived`: Deactivated/archived state (terminal/disabled).
* **CreatedAt / UpdatedAt**: Domain timestamps indicating registry history.

### Business Rules & Invariants
* **Name Valid**: Must be non-empty and at least 3 characters long (enforced by `OrganizationName` value object).
* **OrganizationId Immutability**: Protected through TypeScript `readonly` properties.
* **Name Uniqueness**: Managed via cross-repository boundary verification in the `OrganizationDomainService`.

---

## Next Steps Roadmap

1. **GEN-ID-004: JWT Session Management & Rotation**
   * Implement token verification, expiry checks, and session revocation caches.
2. **GEN-ID-005: Roles Authorization Guards**
   * Bind roles metadata descriptors and evaluate permissions rules in execution pipes.

