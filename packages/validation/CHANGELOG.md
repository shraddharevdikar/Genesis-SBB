# Changelog

All notable changes to the `@sbb/validation` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared validation package (`@sbb/validation`) featuring robust Zod runtime validation.
- Implemented primitive checks for UUIDs, email patterns, URL paths, and ISO 8601 Date/DateTime formats in `common`.
- Formulated validation logic for standard structural identifiers (`userIdSchema`, `tenantIdSchema`, `organizationIdSchema`) and recursive custom metadata logs.
- Added standard validation and safe parsing helper handlers (`validateOrThrow`, `safeValidate`).
- Programmed API response envelopes modeling single-resource bodies, paginated list parameters, and error context detail structures.
- Structured user account validation schemas protecting profile metadata, device sessions, and role permissions.
- Developed workspace schemas validating subscription scopes, sso configurations, and organizational membership maps.
- Configured tenant validation boundaries safeguarding domain routing, active states, and storage/seat constraints.
- Formulated security audit validators tracking event severities, origin actors, and system property update logs.
- Created workflow validation criteria for automated templates, steps, active execution loops, and transition records.
- Built AI pipeline validators verifying message roles, message contents, model parameters, and token cost telemetry.
- Provided connector validations protecting connection state indicators, outgoing webhooks, and sync diagnostic reports.
- Aggregated all domain-specific validation rules inside a centralized namespace helper (`Schemas`) in `/src/schemas/index.ts`.
