# @sbb/database

Database infrastructure package for the **SBB Platform**.

Centralized database connectivity, transaction managers, multi-tenant abstractions, typesafe error translation, and a robust CRUD base repository wrapping the **Prisma ORM** for PostgreSQL.

---

## 🚀 Key Features

* **Singleton Client Wrapper**: Thread-safe `PrismaClient` singleton with lazy-initialization and proper connection teardown.
* **Abstract Base Repository**: Fully generic `BaseRepository` that automates basic CRUD, pagination, and sorting for any Prisma model delegate.
* **Unified Transactions**: High-level `TransactionManager` helper to execute multi-record operations inside secure transactions.
* **Asynchronous Multi-Tenancy**: Extension points for tenant containment using standard `AsyncLocalStorage` flow propagation.
* **Platform Error Mapping**: Translates raw database/ORM constraints into standard platform-friendly domain errors (`DatabaseConflictError`, etc.).
* **Shared Pagination**: Deeply integrated with `@sbb/shared` pagination models.

---

## 💻 Sample Code

### Base Repository Initialization

```typescript
import { BaseRepository } from '@sbb/database';
import { getPrismaClient } from '@sbb/database';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export class UserRepository extends BaseRepository<User, string> {
  constructor() {
    super(getPrismaClient(), 'systemMetadata'); // Binds to systemMetadata model
  }
}
```

### Managed Transactions

```typescript
import { TransactionManager } from '@sbb/database';

const txManager = new TransactionManager();

await txManager.run(async (tx) => {
  // Use tx (Prisma.TransactionClient) to execute multi-steps atomically
  await tx.systemMetadata.create({ data: { key: 'demo', value: 'data' } });
});
```
