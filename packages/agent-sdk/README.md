# Enterprise Agent SDK (AGT-014)

The Enterprise Agent SDK module defines the official developer experience and stable public contracts for extending SBB's Enterprise AI Platform.

Rather than exposing internal runtime implementations, the SDK provides clear boundary interfaces, builders, template structures, validation rules, simulation rigs, and signing systems that allow both internal teams and certified third-party providers to develop compliant capabilities.

## Architectural Principles
* **Extension Stability**: Exposes stable extension contracts (`ExtensionContract`) rather than internal implementation mechanics.
* **Declarative Builders**: Programmatic builders for Digital Employees, custom skills, workflows, department bindings, and sovereign knowledge packs.
* **Isolated Testing and Simulation**: Provides mock runtime simulators to run complete integration tests without spinning up complex server infrastructure.
* **Digital Signatures and Governance**: Enforces static code validation, cryptographic signature packaging, and verification statuses to guarantee compliance.

## Directory Structure

```
packages/agent-sdk/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── agent-sdk.ts               # Main AgentSDK platform contract
    │   ├── sdk-context.ts             # Developer session context
    │   ├── sdk-session.ts             # Active workspace leases
    │   └── sdk-lifecycle.ts           # SDK runtime phases (INITIALIZED, SIMULATING, etc.)
    ├── identity/
    │   ├── sdk-id.ts                  # Unique SDK distribution identifier
    │   └── extension-id.ts            # Unique extension package identifier
    ├── extensions/
    │   ├── extension-contract.ts      # Main initialization/execution hooks
    │   ├── extension-manifest.ts      # Prerequisite headers and metadata
    │   └── extension-lifecycle.ts     # Extension states (STAGED, CERTIFIED, etc.)
    ├── builders/
    │   ├── agent-builder.ts           # Digital Employee config builder
    │   ├── skill-builder.ts           # Dynamic skill schema builder
    │   ├── department-builder.ts      # Department binding builder
    │   ├── workflow-builder.ts        # Executable workflow model builder
    │   └── knowledge-pack-builder.ts  # Sovereign knowledge source builder
    ├── validation/
    │   ├── contract-validator.ts      # Interface compliance checking
    │   ├── compatibility-validator.ts # Framework dependency verification
    │   └── security-validator.ts      # Sandbox constraint enforcement
    ├── testing/
    │   ├── sdk-test-harness.ts        # Unit test runner with mock payloads
    │   ├── mock-runtime.ts            # Virtual platform environment
    │   └── extension-simulator.ts     # Run loop and event dispatcher
    ├── templates/
    │   ├── starter-template.ts        # Basic skill boilerplate
    │   ├── enterprise-template.ts     # Resilient high-availability template
    │   └── industry-template.ts       # Regulatory-compliant templates (EU-RAIL/BAV)
    ├── packaging/
    │   ├── package-builder.ts         # Zip/tarball bundle generator
    │   ├── package-signature.ts       # Code-signing fingerprint tracking
    │   └── version-manifest.ts        # Release channels and changelogs
    ├── documentation/
    │   ├── sdk-reference.ts           # Programmatic API reference structure
    │   ├── extension-guide.ts         # Standard tutorial chapters
    │   └── migration-guide.ts         # Upgrades and breaking change guides
    ├── governance/
    │   ├── sdk-policy.ts              # Allowed version and signature policies
    │   └── certification-profile.ts   # Security compliance scoring records
    ├── metrics/
    │   ├── sdk-metrics.ts             # Test pass rates and execution delays
    │   └── developer-adoption.ts      # Onboarding speed and active workspaces
    └── events/
        ├── extension-created.event.ts # Broadcasted when scaffolding is ready
        ├── validation-completed.event.ts # Broadcasted on test completion
        ├── package-generated.event.ts # Broadcasted when deployment bundle built
        └── sdk-version-released.event.ts # Broadcasted when SDK is updated
```

## Out of Scope
* Direct CLI parser, executable binaries (e.g., `sbb-agent-sdk` CLI code).
* Remote package hosting repositories or physical CDN distribution channels.
* IDE extensions, UI workspace browser windows, or dragging cards panels.
* Database schemas, Prisma configurations, or persistent storage.
