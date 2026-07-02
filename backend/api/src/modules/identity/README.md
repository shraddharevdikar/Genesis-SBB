# Identity Module Foundation

## Module Purpose
The **Identity Module** is the core foundational security layer for the **SBB Platform**. It is responsible for establishing trust, authenticating principals (users, services), issuing session tokens, managing MFA requirements, and enforcing authorization policies. 

This module acts as the Single Source of Truth (SSOT) for identity and access management (IAM) within the platform, isolating security-sensitive workflows from standard business domains.

---

## Responsibilities

The module is architected to eventually own the following domains:

| Sub-Domain | Scope & Purpose |
| :--- | :--- |
| **Authentication** | Verifying user credentials, managing password flows, and handling social login/OAuth callbacks. |
| **Authorization** | Enforcing Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) across API routes. |
| **Session & Tokens** | Issuing, verifying, and revoking JSON Web Tokens (JWT) and persistent Refresh Tokens. |
| **Password Policy** | Enforcing complexity requirements (min length, entropy, character sets) and historical reuse checks. |
| **Multi-Factor Auth (MFA)** | TOTP-based authentication (Google Authenticator, Duo) and recovery code generation. |
| **OAuth 2.0 / OIDC** | Federation with external providers (Google, Microsoft, GitHub) as a relying party. |
| **Passkeys & WebAuthn** | Passwordless authentication utilizing secure device enclaves (biometrics, security keys). |

---

## Project Structure

```text
backend/api/src/modules/identity/
├── controllers/          # HTTP request handlers (e.g. login, register, MFA)
├── services/             # Core business logic orchestrators
├── repositories/         # Database access layer abstraction
├── dto/                  # Data Transfer Objects (validation schemas)
├── entities/             # Database tables mappings (TypeORM / Prisma placeholders)
├── interfaces/           # Contract definitions for testability & decoupling
├── guards/               # NestJS authentication and authorization guards
├── decorators/           # Custom decorators (e.g., @CurrentUser, @Roles)
├── events/               # Domain event schemas (e.g., UserRegisteredEvent)
├── listeners/            # Event handlers responding to domain events
├── strategies/           # Passport.js authentication strategies (e.g., JWT, OAuth)
├── validators/           # Custom validators (e.g., PasswordComplexityValidator)
├── tests/                # Unit, integration, and e2e test suites
├── identity.module.ts    # Main NestJS module definition
└── README.md             # This module documentation
```

---

## Public API (Planned)

### REST Endpoints
* `POST /api/v1/identity/register` - Create a new user identity (subject to rate limiting).
* `POST /api/v1/identity/login` - Authenticate credentials, returns access & refresh tokens.
* `POST /api/v1/identity/refresh` - Exchange a valid refresh token for a new access token.
* `POST /api/v1/identity/logout` - Revoke current session tokens.
* `POST /api/v1/identity/mfa/enable` - Initialize TOTP setup (returns QR code URI).
* `POST /api/v1/identity/mfa/verify` - Confirm TOTP setup and return recovery keys.

---

## Dependencies
* `@nestjs/common` - Core NestJS decorators and utilities.
* `@nestjs/passport` - Authentication framework integration.
* `passport-jwt` - JWT strategy handling.
* `bcrypt` - Secure password hashing.
* `class-validator` & `class-transformer` - Schema validation.

---

## Future Tickets

1. **GEN-ID-002: Credential Hashing & Storage**
   * Implement Bcrypt hashing service.
   * Configure TypeORM/Drizzle User Entity.
   * Write unit tests for password matching.

2. **GEN-ID-003: JWT & Session Management**
   * Configure passport-jwt strategy.
   * Implement access token and refresh token rotation logic.
   * Set up token blacklisting in Redis.

3. **GEN-ID-004: RBAC & ABAC Guards**
   * Create custom `@Roles()` decorator.
   * Implement `RolesGuard` checking claims against JWT payloads.
