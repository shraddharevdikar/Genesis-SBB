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
│   ├── entities/                # DDD Entities and Aggregate Roots (e.g., Identity aggregate)
│   ├── value-objects/           # Immutable self-validating values (e.g., EmailAddress, IdentityId)
│   ├── repositories/            # Explicit persistence contracts (IIdentityRepository)
│   ├── events/                  # Immutable state change notification schemas (IdentityCreatedEvent)
│   ├── services/                # Domain-specific services managing complex invariants
│   ├── policies/                # Discrete rule engines and invariants evaluation (IdentityPolicy)
│   └── exceptions/              # Specialized domain exceptions (IdentityDomainException)
│
├── application/                 # Orchestration of domain tasks, commands, and queries (CQRS)
│   ├── commands/                # Write action request payloads (CreateIdentityCommand)
│   ├── queries/                 # Read action request payloads (GetIdentityQuery)
│   ├── handlers/                # Request processing and execution orchestrators
│   ├── dto/                     # Application-level serialization Data Transfer Objects
│   └── services/                # Orchestration services invoking domain and repository layers
│
├── infrastructure/              # Low-level technology adapters and database persistence
│   └── persistence/
│       ├── prisma/
│       │   └── repositories/    # Prisma-backed repository adapters (PrismaIdentityRepository)
│       └── mappers/             # Map between database rows and domain aggregate state
│
├── presentation/                # Outer interface boundaries for inbound requests
│   ├── rest/                    # REST Controllers exposing versioned v1 routes
│   │   └── dto/                 # HTTP payload models and inputs validation schemas
│   └── graphql/                 # GraphQL Resolvers and query schemas
│
├── tests/                       # Unit specs and behavior validation suites
│   └── identity-module.spec.ts  # Validation of domain entities and state invariants
│
└── identity.module.ts           # Main NestJS module declaring providers and bindings
```

---

## Core DDD Design Principles

1. **Aggregates and Entities**: Entities possess identities and state, while Aggregate Roots act as gateways to coordinate consistent operations within their domain.
2. **Value Objects**: Immutable, self-contained constructs that contain zero identities but encapsulate business invariants (e.g., validating email structure on creation).
3. **Repository Pattern**: Prevents domain models from directly referencing database schemas or ORM clients. The `IIdentityRepository` defines the contract, while `PrismaIdentityRepository` implements it in the infrastructure layer.
4. **Decoupled Communications**: Application handlers trigger changes, and the system publishes explicit `Domain Events` to keep other microservices asynchronously updated.

---

## Next Steps Roadmap

1. **GEN-ID-002: Hashing Service & Persistence Storage**
   * Introduce Bcrypt/Argon2id hashing implementations.
   * Configure real PostgreSQL / Prisma database row persistence.
2. **GEN-ID-003: JWT Session Management & Rotation**
   * Implement token verification, expiry checks, and session revocation caches.
3. **GEN-ID-004: Roles Authorization Guards**
   * Bind roles metadata descriptors and evaluate permissions rules in execution pipes.
