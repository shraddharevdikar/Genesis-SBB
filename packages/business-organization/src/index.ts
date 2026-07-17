// Core Contexts, Lifecycles and Framework Contracts
export * from './core/organization-framework.js';
export * from './core/organization-context.js';
export * from './core/organization-lifecycle.js';

// Identities
export * from './identity/organization-id.js';
export * from './identity/legal-entity-id.js';
export * from './identity/business-unit-id.js';
export * from './identity/division-id.js';

// Hierarchy Nodes
export * from './hierarchy/organization.js';
export * from './hierarchy/holding-company.js';
export * from './hierarchy/legal-entity.js';
export * from './hierarchy/business-unit.js';
export * from './hierarchy/division.js';
export * from './hierarchy/department-reference.js';
export * from './hierarchy/team-reference.js';

// Structures and Reporting lines
export * from './structure/reporting-line.js';
export * from './structure/reporting-relationship.js';
export * from './structure/matrix-relationship.js';
export * from './structure/organizational-boundary.js';

// Regions and Coverage
export * from './regions/region.js';
export * from './regions/country.js';
export * from './regions/operating-region.js';

// Shared Services
export * from './shared-services/shared-service-center.js';
export * from './shared-services/service-provider.js';
export * from './shared-services/service-consumer.js';

// Governance & Fiscal Delegations
export * from './governance/organization-policy.js';
export * from './governance/delegated-authority.js';

// Performance, Complexity & Health Metrics
export * from './metrics/organization-health.js';
export * from './metrics/organization-maturity.js';

// Domain Events
export * from './events/organization-created.event.js';
export * from './events/legal-entity-added.event.js';
export * from './events/business-unit-created.event.js';
export * from './events/organization-restructured.event.js';
