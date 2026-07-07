# SBB API Versioning & Lifecycle Strategy

This document establishes the platform-wide API versioning and lifecycle strategy for the SBB Platform. All future API developments must strictly adhere to this framework.

---

## 1. API Versioning Strategy

SBB Platform supports a multi-modal api resolution mechanism. The `SbbApiVersionResolver` facilitates three resolution patterns, ranked in order of priority:

### A. URI Versioning (Primary)
The version is embedded directly in the URL path. This is the most visible, explicit, and cache-friendly versioning mechanism.
* **Format:** `/v{major}/{endpoint}`
* **Example:** `https://api.sbb.ch/v1/health` or `https://api.sbb.ch/v2/users`

### B. Header Versioning (Secondary)
Clients can specify their requested version via HTTP headers. This is useful for frontends or integrations that want clean URL endpoints.
* **Header Keys:** `X-API-Version` or `Accept-Version`
* **Format Value:** `{version}` or `v{version}`
* **Example:** `X-API-Version: v2` or `Accept-Version: 3-beta`

### C. Media-Type Versioning (Tertiary)
Content-negotiation-based versioning where the version is declared inside the `Accept` header.
* **Format Value:** `application/vnd.sbb.v{version}+json`
* **Example:** `Accept: application/vnd.sbb.v1+json`

### D. Default Resolution Behavior
If no API version is requested, the resolver automatically defaults to the **latest STABLE version** currently active in the metadata catalog to ensure stability and seamless client experiences.

---

## 2. API Lifecycle Model

Every SBB API version exists in one of five distinct states, represented by the `ApiLifecycle` enum:

| Lifecycle State | Description | Client Access | SLA/Support Guarantee |
| :--- | :--- | :--- | :--- |
| `Preview` | Early prototype or design phase. Subject to sudden breaking changes without warning. | Restricted/Internal | No SLA. Experimental. |
| `Beta` | Feature-complete but undergoing testing and validation. Active feedback loop. | Opt-in | Best effort. Mild stability. |
| `Stable` | Production-ready, fully backward-compatible API version. | General Availability | Full SLA. Strict backward compatibility. |
| `Deprecated` | Superceded by a newer stable version. Scheduled for sunset. | Active | Full SLA, but warnings emitted. |
| `Sunset` | Decommissioned and no longer functional. Requests receive an error. | Denied | No support. |

---

## 3. Deprecation & Sunset Policy

To keep SBB Platform lightweight, secure, and modern, older versions are progressively deprecated and retired.

### A. Deprecation Headers
When a client hits a `Deprecated` API, the platform responds with standard headers (conforming to RFC draft standards for Deprecation & Sunset):
1. **`Deprecation: true`**: Tells the client the endpoint is deprecated.
2. **`Sunset: <HTTP-Date>`**: Informs the client of the scheduled decommission date-time.
3. **`Warning: 299 - "<message>"`**: Emits a human-readable deprecation warning along with **migration hints** to direct developers to the modern alternative.

### B. Grace Period / Deprecation Window
* Standard deprecated APIs will remain active for at least **12 months** after the official deprecation announcement.
* Security vulnerabilities or critical infrastructure failures may accelerate sunset schedules under approval from the SBB Architecture Board.

---

## 4. Backward Compatibility & Breaking Changes

### A. What constitutes a Backward-Compatible change?
The following changes do **not** trigger a new major API version:
* Adding new, optional query parameters or request body fields.
* Adding new fields to response objects.
* Adding new endpoints or resource operations.
* Modifying internal performance/logic with equivalent outer behavior.

### B. What constitutes a Breaking Change?
The following changes **require** a new major version or beta group:
* Removing or renaming existing endpoints, parameters, or body properties.
* Changing the data type of an existing field (e.g. integer to string).
* Changing error response structures or success status codes.
* Altering the semantic behavior of a route (e.g. redefining status fields).

---

## 5. Client Expectations & Best Practices

All SBB consumers must design integrations with resilience in mind:
* **JSON Extensibility:** Clients must expect unknown fields in JSON response bodies and should ignore them (robustness principle).
* **Warning Audits:** Developers should set up telemetry or logging to monitor `Warning` or `Deprecation` response headers in client SDKs.
* **Migration Timelines:** Integrate migration tasks into development backlogs as soon as a `Deprecation` warning or migration hint is detected.
