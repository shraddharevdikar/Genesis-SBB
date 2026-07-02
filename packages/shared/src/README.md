# @sbb/shared - Source Architecture

This directory houses the core implementation files for the `@sbb/shared` package.

## 🧱 Architectural Components

* **`constants/`**: Generic platform constants, date formats, and tracing headers.
* **`dto/`**: Safe incoming/outgoing envelopes like `ApiResponse<T>`.
* **`enums/`**: Core system enums including standard SortDirections, Statuses, and Environments.
* **`errors/`**: Framework-free custom error classes extending standard `Error`.
* **`interfaces/`**: Structural signatures for persistent models (`Timestamped`, `Auditable`, `SoftDelete`).
* **`pagination/`**: Central models mapping page criteria and result payloads (`PaginationResponse<T>`).
* **`result/`**: Functional result container mapping explicit success/failure loops (`Result<T, E>`).
* **`types/`**: System utility generics (`DeepPartial<T>`, `Nullable<T>`).
* **`utils/`**: Safe helpers implementing high-speed string, object, date, and ID processes.

## ⚠️ Important Implementation Guidelines

1. **Keep Framework Agnostic**: Do not load React, NestJS, NextJS, or database engine drivers.
2. **Standard Enums Only**: Enums must be regular declarations (no `const enum`).
3. **No Circular Imports**: Keep directory boundaries strictly resolved.
