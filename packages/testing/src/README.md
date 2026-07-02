# @sbb/testing - Source Architecture

This directory houses the shared testing infrastructure for the **SBB Platform**.

## 🧱 Subdirectories

* **`helpers/`**: Primitives like deterministic Test UUID generators and mock `TestClock` classes to make async and time-based assertions reproducible.
* **`fixtures/`**: Static baseline entities for users, tenants, and workflows mimicking production data payloads.
* **`mocks/`**: Environment mocks including `SbbRequestContext`, standard mock HTTP Request and Response schemas for route execution tests.
* **`builders/`**: Fluent design pattern test data builders supporting chainable setups (e.g. `UserBuilder`, `TenantBuilder`).
* **`factories/`**: Batch data mock factories utilizing sequences to automatically spawn collections of unique mock items.
* **`assertions/`**: Rich collection of framework-agnostic assert helpers targeting UUID standards, ISO date-times, and expected validation/Zod exception patterns.
* **`integration/`**: Advanced transactional database monitors and mock webhook receivers designed to simplify integration test setups.

## ⚠️ Guidelines

1. **Keep Framework-Agnostic**: Keep builders, assertions, and mocks pure TypeScript and compatible with any test runner (Vitest, Jest, Playwright, etc.).
2. **Zero-Production Leakage**: These elements should only ever be imported inside `.test.ts`, `.spec.ts` files, or development sandbox modules.
3. **No Database Dependencies**: All operations here are computed strictly in-memory.
