# @sbb/utils

Shared, framework-agnostic utility package for the SBB Platform. This package provides highly optimized, type-safe, and dependency-free functions used across backend services, frontend web applications, and testing environments.

## Package Structure

```
packages/utils/
├── src/
│   ├── async/        # Sleep, Timeout, Retry
│   ├── collections/  # Unique, GroupBy, Chunk, SortBy
│   ├── dates/        # FormatDate, AddDays, DifferenceInDays, IsExpired
│   ├── numbers/      # Clamp, RoundTo, Percentage
│   ├── objects/      # DeepMerge, DeepClone, Omit, Pick
│   ├── retry/        # Advanced configurable retry logic with backoff & jitter
│   ├── strings/      # Case converters, slugify, truncate, capitalize
│   ├── uuid/         # UUID validation and RFC 4122 v4 generation
│   └── index.ts      # Public Exports
```

## Features

### 🧵 Strings
- `capitalize(str)`: Capitalizes the first letter of a string.
- `camelCase(str)`: Converts spaces, hyphens, and underscores to standard camelCase.
- `kebabCase(str)`: Converts camelCase, spaces, and underscores to kebab-case.
- `snakeCase(str)`: Converts camelCase, spaces, and hyphens to snake_case.
- `truncate(str, length, suffix)`: Truncates strings gracefully.
- `slugify(str)`: Generates a URL-friendly and normalized alphanumeric slug.

### 📅 Dates
- `formatDate(date, pattern)`: Simple string-template-based formatting (supports `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss`).
- `addDays(date, days)`: Adds or subtracts days.
- `differenceInDays(dateLeft, dateRight)`: Computes full elapsed days (dateLeft - dateRight) cleanly accounting for daylight savings.
- `isExpired(expiryDate, referenceDate)`: Compares dates to verify expiry status.

### 🔑 UUID
- `generateUuid()`: Standard UUID v4 generation using standard environment APIs or random fallback.
- `isValidUuid(str)`: Rigorous regex verification for RFC-compliant UUIDs.

### 📦 Objects
- `deepMerge(target, ...sources)`: Non-destructive deep object merging.
- `deepClone(val)`: High-performance complete deep clone supporting Arrays, Dates, RegExps, and Nested Objects.
- `omit(obj, keys)`: Omit specified keys from an object.
- `pick(obj, keys)`: Select specified keys from an object.

### 📊 Arrays & Collections
- `unique(arr, key?)`: Filters unique elements, supporting property keys or map functions.
- `groupBy(arr, keyOrFn)`: Groups elements into an object collection.
- `chunk(arr, size)`: Splits array elements into maximum chunk sizes.
- `sortBy(arr, keyOrFn, order)`: Non-mutating type-aware sorting.

### 🔢 Numbers
- `clamp(val, min, max)`: Restricts number ranges.
- `roundTo(val, decimals)`: Standard accurate decimal rounder.
- `percentage(value, total, decimals)`: Calculates percentage and rounds correctly.

### ⏳ Async & Advanced Retry
- `sleep(ms)`: Standard async-await sleep.
- `timeout(promise, ms)`: Promise wrapper that times out.
- `retry(fn, options)`: Basic asynchronous wrapper.
- `retryWithConfig(fn, config, onRetry)`: High-grade retry module supporting configurable delays, exponential backoff, and random jitter to guard against thundering herd problems.
