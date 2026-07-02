# @sbb/auth - Source Architecture

This directory contains the core implementation files of the shared authentication infrastructure package.

## 🧱 Key Subdirectories

* **`hashing/`**: Cryptographically secure asynchronous password hashing using Scrypt.
* **`jwt/`**: Zero-dependency pure HMAC-SHA256 (HS256) JSON Web Token (JWT) signature and verification.
* **`tokens/`**: Cryptographically secure token and structured API key generators.
* **`password-policy/`**: Policy engine validating requirements for length, casing, numbers, and symbols.
* **`interfaces/`**: Contracts for pluggable hashing, JWT signing, token generation, and password policies.
* **`types/`**: Strongly typed data models, payloads, options, and validation results.
* **`constants/`**: Secure, central fallback values and defaults (e.g., token size, password length limits).
* **`errors/`**: Clean, structured domain exceptions extending standard SBB Platform errors.

## ⚠️ Standards

1. **Zero External Dependencies**: All algorithms are implemented using standard Node.js APIs (`crypto`, `util`) for optimal security and reliability.
2. **ESM Compliance**: All relative import and export statements use explicit `.js` specifiers to align with strict NodeNext/ESM configurations.
