# Changelog

All notable changes to the `@sbb/auth` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared authentication infrastructure package (`@sbb/auth`).
- Implemented `ScryptPasswordHasher` providing secure, asynchronous password hashing and verification using Node's native `scrypt` and constant-time comparisons.
- Programmed standard `JwtService` implementing HMAC SHA256 (HS256) signature, claim verification (expiration, audience, issuer, subject, notBefore), and decoded payload parsing without third-party dependencies.
- Designed `TokenGenerator` for secure session token generation and standard API keys (`sbb_live_...`).
- Coded robust `PasswordPolicy` evaluator testing password lengths, upper/lower casing, numbers, and custom special characters.
- Exported strict domain errors (`AuthenticationError`, `InvalidCredentialsError`, `TokenExpiredError`, `InvalidTokenError`, `PasswordPolicyViolationError`) inheriting from `@sbb/shared`.
- Defined standard TypeScript contracts (`IPasswordHasher`, `IJwtService`, `ITokenGenerator`, `IPasswordPolicy`) in the public interface.
- Established clean internal layout with full ESM/NodeNext compiler alignments, complete source guides, and unit READMEs.
