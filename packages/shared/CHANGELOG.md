# Changelog

All notable changes to the `@sbb/shared` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Core exception classes (`AppError`, `ValidationError`, `NotFoundError`, `UnauthorizedError`, `ForbiddenError`, `ConflictError`, `InternalServerError`).
- Functional `Result<T, E>` pattern implementation with `Success<T>` and `Failure<E>` types.
- Standard pagination envelopes (`PaginationRequest`, `PaginationResponse<T>`, `PageInfo`) and generator utilities.
- System-wide generic typescript enums (`Environment`, `LogLevel`, `SortDirection`, `Order`, `Status`).
- Database mapping interfaces (`BaseEntity`, `Timestamped`, `Auditable`, `SoftDelete`).
- Common typing utility aliases (`Nullable<T>`, `Optional<T>`, `DeepPartial<T>`, `ValueOf<T>`).
- Framework-free helper suites (`isValidUuid`, `DateUtils`, `StringUtils`, `ObjectUtils`).
- Package entry exports configurations and markdown documentation.
