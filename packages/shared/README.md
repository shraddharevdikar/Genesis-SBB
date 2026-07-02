# @sbb/shared

Shared platform foundation package for the **SBB Platform**.

Centralized, framework-agnostic utilities, error hierarchies, result patterns, pagination structures, base interfaces, and utility types.

---

## 🚀 Key Features

* **Functional Results**: Safe, exception-free execution flows using standard `Result<T, E>`, `Success<T>`, and `Failure<E>` models.
* **Error Hierarchy**: Class-based custom HTTP exception mapping (`AppError`, `ValidationError`, `NotFoundError`).
* **Unified Pagination**: Standardized parameters for database listings (`PaginationRequest`, `PageInfo`, `PaginationResponse<T>`).
* **Standard Enums**: Uniform status, environment, and ordering flags (`Status`, `Environment`, `SortDirection`).
* **Entity Contracts**: Core metadata contracts for domain records (`BaseEntity`, `Timestamped`, `Auditable`, `SoftDelete`).
* **Generic Helpers**: High-speed types (`DeepPartial<T>`, `Nullable<T>`) and optimized helper namespaces (`DateUtils`, `StringUtils`, `ObjectUtils`).

---

## 📂 Package Structure

```text
packages/shared/
├── src/
│   ├── constants/         # Platform constants and HTTP headers
│   ├── dto/               # API boundary wrappers (ApiResponse)
│   ├── enums/             # Standard system enums
│   ├── errors/            # Typesafe class error hierarchy
│   ├── interfaces/        # Entity schema metadata contracts
│   ├── pagination/        # Database cursor and offset pagination
│   ├── result/            # Result monad success/failure container
│   ├── types/             # Deep utility types
│   ├── utils/             # String, Date, and Object utility helper methods
│   ├── index.ts           # Unified public API exports entrypoint
│   └── README.md          # Internal source documentation
├── package.json
├── tsconfig.json
├── README.md
└── CHANGELOG.md
```

---

## 💻 Code Usage Examples

### 1. Functional Results

```typescript
import { Result } from '@sbb/shared';

function divide(a: number, b: number): Result<number, Error> {
  if (b === 0) {
    return Result.failure(new Error('Division by zero'));
  }
  return Result.success(a / b);
}

const res = divide(10, 2);
if (res.isSuccess) {
  console.log('Answer:', res.value); // 5
}
```

### 2. Standard Exception Mapping

```typescript
import { NotFoundError } from '@sbb/shared';

function getUser(id: string) {
  const user = db.find(id);
  if (!user) {
    throw new NotFoundError(`User with id \${id} was not found.`);
  }
  return user;
}
```

### 3. Deep Partial Manipulation

```typescript
import { DeepPartial } from '@sbb/shared';

interface Config {
  db: { host: string; port: number };
  cache: { ttl: number };
}

const update: DeepPartial<Config> = {
  db: { host: 'localhost' } // Perfectly valid!
};
```
