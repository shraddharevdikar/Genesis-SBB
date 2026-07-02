# @sbb/logger

Enterprise logging package for the **SBB Platform**.

Centralized, type-safe, high-performance wrapper around **Pino** featuring selective redaction, detailed error serialization, multi-tenant tracing, and real-time execution timing.

---

## 🚀 Key Features

* **High Performance**: Built on Pino to minimize CPU usage and prevent logging from blocking event loops.
* **Smart Environment Toggles**: Outputs clean `pino-pretty` console messages in development/test states, and fast JSON logs in production environments.
* **Trace-Aware Contextualizing**: Dedicated helpers to spawn child loggers featuring unified `correlationId`, `requestId`, `tenantId`, and `userId` fields.
* **Sensitive Data Redaction**: Automatically filters standard keys (e.g. `password`, `secret`, `accessToken`) to prevent security leaks in log files.
* **Custom Error Serialization**: Formats system exceptions cleanly, capturing error messages, stack traces, nested states, and custom response codes.
* **Performance Timer Tracing**: Easy performance benchmarks using nanosecond-accurate `process.hrtime()` hooks.

---

## 📂 Package Structure

```text
packages/logger/
├── src/
│   ├── logger.ts          # Core SBBLoggerImpl wrapper class
│   ├── factory.ts         # Pino instantiation and environment setup
│   ├── child-logger.ts    # Correlation/identity child decorators
│   ├── serializers.ts     # Exception parsing and http formats
│   ├── redaction.ts       # Privacy filters and sensitive data keys
│   ├── constants.ts       # Default parameters & levels
│   ├── types.ts           # Types, options, and contracts
│   ├── index.ts           # Entry exports & global getter
│   └── README.md          # Internal architecture documentation
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Code Usage Examples

### 1. Basic Logging

Retrieve the pre-configured global logger or create an application-specific logger:

```typescript
import { getDefaultLogger, getLogger } from '@sbb/logger';

// 1. Get default logger
const logger = getDefaultLogger();
logger.info('System initialization completed successfully');

// 2. Custom logger
const appLogger = getLogger({ name: 'api-gateway', level: 'debug' });
appLogger.debug({ activeConnections: 42 }, 'Debugging incoming request pool');
```

### 2. Error Logging with Custom Serializer

Errors are automatically parsed and formatted:

```typescript
try {
  throw new Error('Database connection timeout');
} catch (error) {
  logger.error(error as Error, 'An unexpected database event occurred');
}
```

### 3. Creating Request Context Child Loggers

Track logs across services by propagating trace IDs:

```typescript
import { createRequestLogger } from '@sbb/logger';

// When a new request arrives, wrap parent logger to keep identities consistent
const requestLogger = createRequestLogger(
  logger,
  'corr-9923a-f2b1', // Correlation ID
  'req-01a88b',      // Request ID
  'tenant-sbb-hq',   // Tenant ID (optional)
  'usr_admin_12'     // User ID (optional)
);

// Any log on requestLogger automatically carries these details
requestLogger.info('User initiated database search');
```

### 4. Running Performance Benchmarks

Check the processing duration of code sections accurately:

```typescript
const timer = logger.time('massive-query-processing');

// ... perform computation ...

timer.end(); 
// Outputs: Info: Performance [massive-query-processing]: completed in 12.450ms
```

### 5. Sensitive Data Redaction

Sensitive parameters are safely censored:

```typescript
logger.info({
  userId: 'usr_admin_12',
  password: 'my-super-secret-password-123', // Will be replaced with [REDACTED]
  nested: {
    secret: 'shh-quiet' // Will be replaced with [REDACTED]
  }
}, 'User profile update state');
```
