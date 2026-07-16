# Enterprise Agent API (AGT-015)

The Enterprise Agent API module defines SBB's official business capability gateway and communication interface contracts for interacting with its Enterprise AI Workforce.

This API is **not a low-level REST, GraphQL, or gRPC endpoint controller layer**. It is a **Business Capability Gateway** modeled through Clean Architecture, DDD principles, and strict contract typing. It allows third-party enterprise resource systems (such as SAP, Salesforce, custom ERPs, and external partners) to interact safely with SBB digital workers.

## Architectural Principles
* **Capability Abstraction**: Avoids exposing raw database models or specific runtime thread IDs. All interactions are grouped under high-level capabilities (e.g. Planning, Execution, Governance, Monitoring, and Marketplace).
* **Command-Query Responsibility Segregation (CQRS)**: All interactions are structured explicitly as Commands, Queries, Responses, or Events, providing optimal path security, throttling, and isolation.
* **Stable Interoperability Adapters**: Exposes explicit contracts for external systems, custom webhooks, asynchronous callbacks, and bi-directional event distribution channels.
* **Strict Digital Policies**: Models native cryptographic signatures, OAuth authentication checks, department resource authorizations, rate limits, and comprehensive audit log generators.

## Directory Structure

```
packages/agent-api/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── agent-api.ts               # Main AgentAPI platform gateway interface
    │   ├── api-session.ts             # Active workspace partner session model
    │   ├── capability-gateway.ts      # Low-level dynamic handler routing
    │   └── api-context.ts             # Client trace and correlation telemetry context
    ├── identity/
    │   ├── api-request-id.ts          # Unique correlation tracker for API events
    │   └── api-session-id.ts          # Unique access token session token
    ├── contracts/
    │   ├── command-contract.ts        # Declarative mutation execution formats
    │   ├── query-contract.ts          # Safe structured data reads
    │   ├── event-contract.ts          # Standard publishable messaging signatures
    │   └── response-contract.ts       # Generalized result payload tracking
    ├── capabilities/
    │   ├── planning-capability.ts     # Platform plan-scaffolding operations
    │   ├── execution-capability.ts    # Agent and department workforce dispatching
    │   ├── governance-capability.ts   # Rule audits and compliance monitors
    │   ├── monitoring-capability.ts   # High-level fleet indices and alert summaries
    │   └── marketplace-capability.ts  # Marketplace queries and remote deployment tasks
    ├── security/
    │   ├── api-policy.ts              # HMAC, TLS level, and payload size bounds
    │   ├── authentication-contract.ts # Key-to-participant validation contracts
    │   ├── authorization-contract.ts  # Multi-tenant resource check rules
    │   └── rate-limit-policy.ts       # Burst buffers and request throttle rules
    ├── versioning/
    │   ├── api-version.ts             # Semantic version structure
    │   ├── compatibility-policy.ts    # Core framework deprecation maps
    │   └── deprecation-policy.ts      # Sunset milestones and grace periods
    ├── integration/
    │   ├── external-system-contract.ts # ERP, CRM, and target system configs
    │   ├── webhook-contract.ts        # Client listener registry settings
    │   └── callback-contract.ts       # Async callback return dispatcher
    ├── documentation/
    │   ├── api-reference.ts           # Schema declaration metadata records
    │   ├── integration-guide.ts       # Core tutorial text structures
    │   └── migration-guide.ts         # Upgrade procedures and change grids
    ├── governance/
    │   ├── api-governance.ts          # Data compliance validator rules
    │   └── audit-contract.ts          # Transaction ledger logging systems
    ├── metrics/
    │   ├── api-metrics.ts             # Performance totals and delay levels
    │   └── usage-metrics.ts           # Compute budgets and billing fees
    └── events/
        ├── api-requested.event.ts     # Broadcasted when client makes request
        ├── capability-invoked.event.ts # Broadcasted when capability runs
        ├── api-version-released.event.ts # Broadcasted on API upgrade deployment
        └── integration-registered.event.ts # Broadcasted when system registered
```

## Out of Scope
* HTTP servers (Express, Fastify), REST route handlers, or OpenAPI YAML files.
* GraphQL schema strings, GraphQL execution chains, or gRPC proto files.
* Direct database schemas, Prisma configurations, or active database tables.
* Relational database triggers, Redis caches, or LLM endpoints.
