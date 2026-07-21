# SBB Enterprise Database Foundation (GEN-100.1)

The centralized database infrastructure package for the **Genesis-SBB Platform**.

Centralized database connectivity, transaction managers, multi-tenant abstractions, typesafe error translation, and a robust NestJS-compatible database service wrapping the **Prisma ORM** for PostgreSQL.

---

## 🚀 Key Features

* **Singleton Client Wrapper**: Thread-safe `PrismaClient` singleton with lazy-initialization and proper connection teardown.
* **Abstract Base Repository**: Fully generic `BaseRepository` that automates basic CRUD, pagination, and sorting for any Prisma model delegate.
* **NestJS-Compatible Database Service**: A globally injectable NestJS service wrapping the Prisma client lifecycle.
* **Unified Transactions**: High-level `TransactionManager` helper to execute multi-record operations inside secure transactions.
* **Asynchronous Multi-Tenancy**: Extension points for tenant containment using standard `AsyncLocalStorage` flow propagation.
* **Platform Error Mapping**: Translates raw database/ORM constraints into standard platform-friendly domain errors (`DatabaseConflictError`, etc.).
* **Shared Pagination**: Deeply integrated with `@sbb/shared` pagination models.

---

## 🛠 Setup & Installation

### Prerequisite

Define the database connection string in your `.env` file at the root of the workspace:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/genesis_sbb?schema=public"
```

### Installation

Install all package and workspace dependencies from the workspace root:

```bash
pnpm install
```

---

## 🔄 Schema Migration

To apply changes in `schema.prisma` to your local PostgreSQL instance:

```bash
pnpm db:migrate
```

To regenerate the typescript client mapping based on the schema:

```bash
pnpm db:generate
```

---

## 🌱 Database Seeding

Populate the database with demo enterprise seed records (Demo Tenant, Demo Org, Default Permissions, Admin Role, and Demo Admin User):

```bash
pnpm db:seed
```

---

## 🖥 Database Studio

Launch the Prisma graphical console locally:

```bash
pnpm db:studio
```

---

## 💻 Technical Usage

### NestJS Global Module Integration

```typescript
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@sbb/database';

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
```

### Injecting DatabaseService

```typescript
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async findAllUsers() {
    return this.db.user.findMany({
      where: { deletedAt: null },
    });
  }
}
```

### Singleton Client Usage (Non-NestJS Context)

```typescript
import { prisma } from '@sbb/database';

const users = await prisma.user.findMany();
```
