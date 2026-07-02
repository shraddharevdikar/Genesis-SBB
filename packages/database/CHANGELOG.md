# Changelog

All notable changes to the `@sbb/database` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core Prisma workspace directory with custom configured `schema.prisma` mapping to PostgreSQL.
- Implemented `getPrismaClient` lazy-singleton loader with support for connection lifecycle control.
- Designed generic interface `IRepository` and abstract `BaseRepository` mapping base CRUD, count, and paginated criteria.
- Programmed a standard `TransactionManager` utilizing Prisma's `$transaction` model with advanced timeout support.
- Configured typesafe platform exception mapper `handleDatabaseError` converting constraint violation codes into standard domain errors.
- Added standard `TenantContext` supporting safe async identity isolation.
- Created complete documentation guides, configuration targets, and TypeScript manifests.
