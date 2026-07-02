# @sbb/database - Source Architecture

This directory contains the implementation of our database infrastructure wrapping Prisma for PostgreSQL.

## 🧱 Key Subdirectories

* **`client/`**: Singleton initialization of Prisma Client to prevent duplicate/overloaded connection pools.
* **`repositories/`**: Base CRUD and paginated query contract definitions and concrete abstract implementations.
* **`transactions/`**: Managed database execution wrappers for running multiple operations in an atomic transaction.
* **`tenant/`**: Thread-safe Multi-Tenant identity context using Node's `AsyncLocalStorage`.
* **`pagination/`**: Parameter helpers mapping offsets and sorting onto Prisma arguments.
* **`filters/`**: Simple date range, soft delete, and status filters builder.
* **`errors/`**: Auto-translator mapping raw Prisma database codes into typesafe platform exception objects.
* **`types/`**: Helper types, alias signatures, and optional flag interfaces.

## ⚠️ Standards

1. **Lazy Initialization**: The client is only instantiated on first call to prevent startup crashes.
2. **ESM Compliance**: Keep imports/exports relative using explicit `.js` specifiers.
