# Enterprise Business Integrations Framework (BOSF-014)

The Enterprise Business Integrations Framework module defines SBB's core domain-independent corporate integrations, provider connectors, data schema contracts, authentication profiles, object mappings, and governance policy audits of the **Business Operating System Framework (BOSF)**.

This module is reusable across all SBB Business Operating Systems (e.g. `MarketingOS`, `SalesOS`, `FinanceOS`, `HROS`, `LegalOS`, `OperationsOS`, `ExecutiveOS`, etc.) to register and connect external systems without vendor-lock, ensuring extreme security, complete audit logs, and multi-tenant security isolation.

## Architectural Principles
* **Declarative Integration Design**: Rather than coding custom vendor SDK connections or active protocol runners, business units specify schemas, field mappings, and security policies declaratively.
* **Separation of Concerns**: Connectors capture the general SaaS/on-premise vendor API capability; Authentication Profiles manage secure token exchanges; Object Mappings normalize fields.
* **Sovereignty & Governance Compliance**: Integrations are strictly audited via security profiles, and allowed regions constraints prevent cross-border customer PII data leaks.

## Directory Structure

```
packages/business-integrations/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── integration-framework.ts   # Main IntegrationFramework contract interface
    │   ├── integration-context.ts     # Multi-tenant context sessions
    │   ├── integration-lifecycle.ts   # Status states (DRAFT, CONFIGURING, CONNECTED_ACTIVE, DEGRADED_HEALTH, DISCONNECTED, RETIRED)
    │   └── integration-version.ts     # Semantic version logs with operator audits
    ├── identity/
    │   ├── integration-id.ts          # Unique business integration identifier
    │   ├── connector-id.ts            # Unique connector catalog identifier
    │   └── endpoint-id.ts             # Unique connector endpoint identifier
    ├── integrations/
    │   ├── business-integration.ts    # Main multi-tenant integration aggregate
    │   ├── integration-request.ts     # Outbound endpoint request payloads
    │   └── integration-response.ts    # Received endpoint response datasets
    ├── connectors/
    │   ├── connector-definition.ts    # Vendor systems properties and capability lists
    │   ├── connector-capability.ts    # Access limits (RPS limit, read/write permissions)
    │   └── connector-configuration.ts # Timeout parameters, URLs, and authentication ties
    ├── adapters/
    │   ├── provider-adapter.ts        # Connectors physical runtime adapter
    │   ├── protocol-adapter.ts        # Protocol capabilities (REST, GraphQL, SOAP, Webhooks, Event Streaming)
    │   └── authentication-profile.ts  # Token endpoints and secure key vault references
    ├── contracts/
    │   ├── request-contract.ts        # Standard request schemas and validation rules
    │   ├── response-contract.ts       # Expected response schemas and HTTP codes
    │   └── event-contract.ts          # Event schemas and replay configurations
    ├── mapping/
    │   ├── field-mapping.ts           # Individual field name translations
    │   ├── object-mapping.ts          # Object translations with strict schema validations
    │   └── transformation-rule.ts     # Normalization rules (case, date formats, regex replaces)
    ├── governance/
    │   ├── integration-owner.ts       # Accountable departments and certified operator roles
    │   ├── integration-policy.ts      # Region data-sovereignty restrictions and masking flags
    │   └── integration-security.ts    # MTLS markers, IP CIDRs, and cryptographic audit references
    └── events/
        ├── integration-created.event.ts       # Emitted when a new integration is cataloged
        ├── integration-connected.event.ts     # Emitted when data sync pipeline starts
        ├── integration-disconnected.event.ts  # Emitted when data sync pipeline is paused
        └── integration-retired.event.ts       # Emitted when an integration is sunsetted
```

## Out of Scope
* Direct execution of REST/SOAP/GraphQL network clients or HTTP dispatchers.
* Third-party vendor SDK dependencies or NPM modules.
* OAuth popup UI flows or key vault secret values.
* Message queues, web sockets, or active background sync workers.
