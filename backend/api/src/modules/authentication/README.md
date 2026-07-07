# Authentication Service Foundation (GEN-ID-007)

The **Authentication Module** implements the enterprise-grade, provider-based authentication system for the SBB Platform. Designed according to DDD principles, it decouples the presentation interface, authentication orchestrator, and core credential validation providers.

---

## Architecture Overview

This module uses a provider-based architecture, isolating credential checking mechanics into individual provider units while offering a unified interface at the application layer.

```
authentication/
├── application/
│   ├── commands/
│   │   └── authenticate-user.command.ts
│   ├── handlers/
│   │   └── authenticate-user.handler.ts
│   ├── dto/
│   │   └── authenticate-user.dto.ts
│   └── services/
│       └── authentication-application.service.ts
├── domain/
│   ├── providers/
│   │   └── authentication-provider.interface.ts
│   ├── services/
│   │   └── authentication-domain.service.ts
│   ├── policies/
│   │   └── password-strength.policy.ts
│   ├── events/
│   │   ├── user-authenticated.event.ts
│   │   ├── authentication-failed.event.ts
│   │   ├── refresh-token-issued.event.ts
│   │   └── password-changed.event.ts
│   ├── exceptions/
│   │   ├── invalid-credentials.exception.ts
│   │   └── unsupported-provider.exception.ts
│   └── repositories/
│       └── refresh-token-repository.interface.ts
├── infrastructure/
│   ├── providers/
│   │   └── password.provider.ts
│   ├── hashing/
│   │   └── bcrypt-hashing.service.ts
│   ├── jwt/
│   │   └── jwt-token.service.ts
│   └── repositories/
│       └── in-memory-refresh-token.repository.ts
└── presentation/
    └── dto/
        └── login-request.dto.ts
```

---

## Domain Model & Policy Rules

### 1. Provider Contracts
* **AuthenticationProvider**: Base contract defining general provider identity metadata.
* **PasswordAuthenticationProvider**: Handles validation of typical password credentials.
* **OAuthAuthenticationProvider**: Placeholder abstraction for delegating to external OAuth identity providers.
* **PasskeyAuthenticationProvider**: Placeholder abstraction for WebAuthn/Passkey credential workflows.

### 2. Password Strength Policy
Enforces safety invariants on incoming passwords:
* Minimum length of **8 characters**.
* Must contain at least **one alphabet letter**.
* Must contain at least **one numeric digit**.

---

## Application Orchestration

The application layer coordinates credential checks by looking up the correct active provider:
1. Receives `AuthenticateUserCommand`.
2. Asks `AuthenticationDomainService` for the registered handler matching the specified provider name.
3. Delegates credential verification to the target provider.
4. Generates an access token and returns metadata upon successful authentication, or throws specialized domain exceptions.

---

## Roadmap

1. **GEN-ID-007.1: Controller & Guard Bindings**
   * Expose presentation controller endpoints and implement passport/guard bindings.
2. **GEN-ID-007.2: Real JWT and Bcrypt Serialization**
   * Integrate actual JWT signing algorithms and real Bcrypt hashing adapters.
