// Core Contracts, Lifecycles and Sessions
export * from './core/department-framework.js';
export * from './core/department-context.js';
export * from './core/department-lifecycle.js';
export * from './core/department-session.js';

// Identities
export * from './identity/department-framework-id.js';
export * from './identity/department-instance-id.js';

// Mission and Strategy
export * from './mission/department-mission.js';
export * from './mission/department-vision.js';
export * from './mission/strategic-objective.js';

// Capabilities
export * from './capabilities/department-capability.js';
export * from './capabilities/capability-ownership.js';
export * from './capabilities/capability-maturity.js';

// Hybrid Workforce
export * from './workforce/ai-workforce-profile.js';
export * from './workforce/human-workforce-profile.js';
export * from './workforce/workforce-assignment.js';

// Governance and Fiscal Authority
export * from './governance/department-policy.js';
export * from './governance/budget-authority.js';
export * from './governance/approval-authority.js';

// Performance and Quality Indices
export * from './performance/department-kpi.js';
export * from './performance/department-health.js';
export * from './performance/department-maturity.js';

// Localized Playbooks and Operating Procedures
export * from './knowledge/department-playbook.js';
export * from './knowledge/operating-procedure.js';
export * from './knowledge/best-practice-reference.js';

// Inter-department Relations and SLAs
export * from './relationships/cross-department-dependency.js';
export * from './relationships/service-contract.js';
export * from './relationships/collaboration-profile.js';

// Metric Loggers
export * from './metrics/department-metrics.js';
export * from './metrics/workforce-metrics.js';

// Domain Events
export * from './events/department-established.event.js';
export * from './events/capability-assigned.event.js';
export * from './events/workforce-updated.event.js';
export * from './events/department-retired.event.js';
