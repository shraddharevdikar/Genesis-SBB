# @sbb/auth

Shared authentication infrastructure package for the **SBB Platform**.

Centralized, zero-dependency cryptographically secure helper primitives, password hashing, JWT operations, API key builders, and configurable password policy evaluators.

---

## 🚀 Key Features

* **Scrypt Password Hashing**: Thread-safe asynchronous password hashing leveraging Node's native scrypt engine with automatic salt generation and timing-safe verification.
* **Lightweight HS256 JWT Utility**: Full signature verification and claims checking (expiration, audience, issuer, subject) without external libraries.
* **Secure API Keys**: Unique tokens and formatted, safe API keys using secure byte generation.
* **Strength Policies**: Robust, standard-compliant validator verifying min/max length, case sensitivity, numbers, and symbols.
* **Structured Exceptions**: Clear mapping to standard platform error domains (e.g., `InvalidCredentialsError`, `TokenExpiredError`).

---

## 💻 Code Snippets

### Password Hashing
```typescript
import { ScryptPasswordHasher } from '@sbb/auth';

const hasher = new ScryptPasswordHasher();
const hash = await hasher.hash('super-secret-password');
const isValid = await hasher.verify('super-secret-password', hash);
```

### JWT Signing & Verification
```typescript
import { JwtService } from '@sbb/auth';

const jwtService = new JwtService();
const secret = 'platform-secret-key';

// Sign token
const token = jwtService.sign({ userId: 'user-123' }, secret, { expiresIn: '1h' });

// Verify token
const payload = jwtService.verify(token, secret);
```

### Password Strength Verification
```typescript
import { PasswordPolicy } from '@sbb/auth';

const policy = new PasswordPolicy();
const result = policy.validate('Secret123!');
if (!result.isValid) {
  console.log('Errors:', result.errors);
}
```

### API Keys and Tokens
```typescript
import { TokenGenerator } from '@sbb/auth';

const generator = new TokenGenerator();
const apiKey = generator.generateApiKey('sbb_live');
const inviteToken = generator.generateRandomToken();
```
