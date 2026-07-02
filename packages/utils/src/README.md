# @sbb/utils Source Directory

All helper functions implemented inside this package must be framework-agnostic and free from business domain logic.

## Guidelines

- All exports must proceed through `src/index.ts`.
- Avoid adding heavy external npm dependencies. Implement utilities pure-play when possible.
- Ensure all modules remain fully type-safe.
