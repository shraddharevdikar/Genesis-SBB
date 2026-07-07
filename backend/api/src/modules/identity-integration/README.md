# Identity Integration Layer Module (GEN-ID-009.1)

The **Identity Integration Layer Module** establishes the core contracts and cross-module integration abstractions for accessing user session contexts, current tenant information, and corporate memberships within the SBB Platform.

By defining common decorators, placeholder guards, and service APIs, other feature domains can build on top of uniform identity structures without being tightly bound to underlying database or cryptographic session schemas.

---

## Architectural Layout

```
identity-integration/
├── application/
│   └── services/
│       └── identity-context.service.ts
├── domain/
│   ├── interfaces/
│   │   ├── current-user-provider.interface.ts
│   │   ├── identity-context-provider.interface.ts
│   │   ├── organization-resolver.interface.ts
│   │   └── tenant-resolver.interface.ts
│   └── types/
│       └── identity-context.types.ts
├── infrastructure/
│   ├── decorators/
│   │   ├── current-organization.decorator.ts
│   │   ├── current-tenant.decorator.ts
│   │   └── current-user.decorator.ts
│   ├── guards/
│   │   ├── authentication.guard.ts
│   │   ├── authorization.guard.ts
│   │   └── tenant.guard.ts
│   ├── interceptors/
│   │   └── identity-context.interceptor.ts
│   └── middleware/
│       └── identity-context.middleware.ts
├── README.md
└── tests/
    └── identity-integration.spec.ts
```

---

## Identity Context Objects
These interface structures encapsulate the active request credentials:
* **IdentityContext**: The global envelope containing the authenticated user, current organization membership, tenant boundaries, and telemetry tracking (such as `correlationId`).
* **CurrentUser**: Structural container representing the calling actor's account identifiers, names, and assigned system-wide role keys.
* **CurrentTenant**: Encapsulates tenant separation metadata.
* **CurrentOrganization**: Represents corporate/enterprise association constraints.
* **CurrentMembership**: Specifies role-bindings inside specific organizations.

---

## Extension Decorators & Guards
We expose common placeholders for immediate framework injection:
* `@CurrentUser()`: Custom parameter decorator to easily pull user profiles inside controllers.
* `@CurrentTenant()`: Retrieves active tenant scopes safely.
* `@CurrentOrganization()`: Exposes organization context directly.
* `AuthenticationGuard` & `AuthorizationGuard`: Framework guards securing critical handler pipelines.

---

## Out of Scope
In alignment with Milestone M1 guidelines, the following features are not implemented:
* Session parsing, token decoding, or actual security checks.
* Team validation logic or live database resolvers.
* Controller implementations or REST routes.
