# @sbb/config

Centralized, type-safe configuration management for every application, backend module, and shared package on the **SBB Platform**.

Powered by **TypeScript**, **Zod** schema validation, and **dotenv**.

---

## 🚀 Key Features

* **Strict Type Safety**: Full autocompletion and structural integrity across nested configurations.
* **Environment Validation**: Validates process environment variables at startup against a strict schema using Zod.
* **Feature Flag Service**: Provides out-of-the-box support for querying and overriding feature flags.
* **Sensible Fallbacks**: Built-in default values ensure safe local development out-of-the-box.
* **Lazy Initialization**: Config is loaded and cached on first call to prevent redundant file I/O or multiple parses.

---

## 📂 Package Structure

```text
packages/config/
├── src/
│   ├── config.ts          # Config factory, cache controls, global getter
│   ├── env.ts             # Dotenv environment loading & validation
│   ├── schema.ts          # Zod schema definitions with type preprocessors
│   ├── feature-flags.ts   # Feature Flag Service & override managers
│   ├── index.ts           # Public API entry point exports
│   └── types.ts           # Structural platform interface contracts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Configuration Properties

The package maps and enforces properties across these key configurations:

| Section | Keys | Purpose |
| :--- | :--- | :--- |
| **System** | `env`, `port` | Standard Node environment & HTTP server port bindings |
| **Database** | `db.url`, `db.maxConnections` | SQL/Drizzle connection string and connection pooling size |
| **Redis** | `redis.url` | Redis connection URL for caching, sessions, and token revocation |
| **Security** | `security.jwtSecret`, `security.jwtAccessExpiration`, `security.jwtRefreshExpiration` | JWT signing credentials and active expiration durations |
| **Email** | `email.smtpHost`, `email.smtpPort`, `email.from` | SMTP server connection parameters for platform messaging |
| **Storage** | `storage.provider`, `storage.bucketName` | Cloud or local file asset buckets (supports Local, S3, GCS) |
| **AI Providers** | `ai.geminiApiKey`, `ai.openaiApiKey` | AI generation model API key configurations |
| **Feature Flags** | `features.enableMfa`, `features.enableOauth`, `features.enablePasskeys`, `features.enableAlphaFeatures` | Programmatic feature gate flags |

---

## 💻 Code Usage Examples

### 1. Basic Setup

To load and fetch global configuration within your application entry points:

```typescript
import { getConfig } from '@sbb/config';

// Fetches the validated, strongly typed config tree
const config = getConfig();

console.log(`Server starting on port: ${config.port}`);
console.log(`Active Environment: ${config.env}`);
console.log(`Database URL: ${config.db.url}`);
```

### 2. Querying Feature Flags

Utilize the feature flag manager to toggle platform features safely:

```typescript
import { getConfig, FeatureFlagService } from '@sbb/config';

const config = getConfig();
const featureFlags = new FeatureFlagService(config.features);

if (featureFlags.isEnabled('enableMfa')) {
  console.log('MFA flow is active.');
} else {
  console.log('MFA flow is disabled.');
}
```

### 3. Dynamic Custom Path Loading (e.g. Unit Testing)

Override `.env` location or reload configurations at test time:

```typescript
import { getConfig, resetConfig } from '@sbb/config';

// Clear current cache
resetConfig();

// Load specific test env file
const testConfig = getConfig('/path/to/.env.test');
```
