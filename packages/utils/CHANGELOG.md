# Changelog

All notable changes to the `@sbb/utils` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared utilities package (`@sbb/utils`) featuring type-safe, framework-agnostic helper modules.
- Implemented **Strings** utilities: `capitalize`, `camelCase`, `kebabCase`, `snakeCase`, `truncate`, and `slugify`.
- Implemented **Dates** utilities: `formatDate`, `addDays`, `differenceInDays`, and `isExpired`.
- Implemented **UUID** utilities: `generateUuid` and `isValidUuid`.
- Implemented **Objects** utilities: `deepMerge`, `deepClone`, `omit`, and `pick`.
- Implemented **Collections** utilities: `unique`, `groupBy`, `chunk`, and `sortBy`.
- Implemented **Numbers** utilities: `clamp`, `roundTo`, and `percentage`.
- Implemented **Async** utilities: `sleep`, `timeout`, and `retry`.
- Implemented **Retry** utilities: Advanced customizable `retryWithConfig` and backoff calculation supporting max attempts, delays, and exponential/jitter strategies.
