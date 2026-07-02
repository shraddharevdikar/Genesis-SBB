# Changelog

All notable changes to the `@sbb/testing` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared testing package (`@sbb/testing`) featuring generic, reusable testing infrastructure.
- Introduced deterministic test UUID generation helper (`generateTestUuid`) and custom pre-configured test identifiers.
- Created `TestClock` mock helper capable of locking UTC timestamps and simulating elapsed execution steps.
- Set up standard mock contexts (`SbbRequestContext`) and mock HTTP request/response envelopes to support controller logic.
- Built fluent data builders (`UserBuilder`, `TenantBuilder`, `OrganizationBuilder`) supporting chainable parameters.
- Built auto-incrementing data sequence mock factories (`createUserMock`, `createTenantMock`) to speed up list generation.
- Coded custom, framework-agnostic assertion helpers checking UUID layout standards, timestamp limits, and validation exception contexts.
- Added simulation utilities (`MockDatabaseManager`, `SimulatedWebhookReceiver`) tracking integration actions, active state arrays, and transaction rollbacks.
