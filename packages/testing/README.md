# @sbb/testing

Centralized Testing Infrastructure and Mocking library for the **SBB Platform**.

This package provides generic, reusable, and framework-agnostic test helpers, mock context generators, builders, and custom assertions designed to ensure consistent testing standards across all SBB packages.

---

## 🚀 Key Modules

* **Test Helpers**: Deterministic UUID generation (`generateTestUuid`) and a fully functional mock clock (`TestClock`) for locking and stepping through time.
* **Mocks & Contexts**: Pre-configured request context utilities (`createMockRequestContext`) and standard Request/Response mocks for route testing.
* **Fixtures**: Static baseline templates for user profiles, organization limits, and active multi-step workflows.
* **Builders**: Chainable fluent-interface test-data builders (`UserBuilder`, `TenantBuilder`, `OrganizationBuilder`).
* **Factories**: Sequential batch mock generators (`createUserMock`, `createTenantMock`) that safely increment data fields automatically.
* **Assertions**: Rich assertion methods to validate UUID formats, ISO date-times, and expected validation errors.
* **Integration**: In-memory mock database managers with active rollback controls and mock webhook listeners.

---

## 💻 Integration Examples

### 1. Mock Clock (Time Freezing)
Make asynchronous, time-sensitive code completely deterministic:
```typescript
import { TestClock } from '@sbb/testing';

// Freeze time at static epoch
TestClock.freeze();
console.log(TestClock.nowIso()); // "2026-07-02T12:00:00.000Z"

// Progress mock clock forward by 5 seconds
TestClock.tick(5000);
console.log(TestClock.nowIso()); // "2026-07-02T12:00:05.000Z"

// Restore dynamic system time
TestClock.reset();
```

### 2. Fluent Test Builders
Create tailored entities for custom test scopes:
```typescript
import { UserBuilder } from '@sbb/testing';
import { UserRole, UserStatus } from '@sbb/types';

const customAdmin = new UserBuilder()
  .withId("custom-id-123")
  .withEmail("custom.admin@sbb.internal")
  .withRole(UserRole.ADMIN)
  .withStatus(UserStatus.ACTIVE)
  .build();
```

### 3. Custom Assertions
Assert formats and handle validation errors elegantly:
```typescript
import { assertUuid, assertValidationError } from '@sbb/testing';
import { validateUser } from './my-validator';

// Standard UUID format verification
assertUuid(payload.userId);

// Assert validation fails on bad inputs
assertValidationError(() => {
  validateUser({ email: "invalid-email" });
}, "email");
```

### 4. Integration DB Managers
Replicate commit/rollback transactions during complex business pipelines:
```typescript
import { MockDatabaseManager } from '@sbb/testing';

const dbManager = new MockDatabaseManager();
const usersTable = dbManager.getTable('users');

dbManager.beginTransaction();
usersTable.push({ id: '1', name: 'Rollback Target' });

// Undo inserts and restore table states instantly
dbManager.rollbackTransaction();
console.log(usersTable.length); // 0
```
