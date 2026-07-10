// Business Memory Core
export * from './core/business-memory.js';
export * from './core/memory-context.js';
export * from './core/memory-scope.js';
export * from './core/memory-record.js';

// Business Memory Identity
export * from './identity/memory-id.js';
export * from './identity/memory-owner.js';

// Business Memory Classification
export * from './classification/memory-type.js';
export * from './classification/memory-category.js';
export * from './classification/memory-priority.js';
export * from './classification/memory-sensitivity.js';

// Business Memory References
export * from './references/memory-reference.js';
export * from './references/related-memory.js';
export * from './references/external-reference.js';

// Business Memory Retention
export * from './retention/retention-policy.js';
export * from './retention/expiration-policy.js';
export * from './retention/archival-policy.js';

// Business Memory Governance
export * from './governance/memory-governance.js';
export * from './governance/access-policy.js';
export * from './governance/privacy-level.js';

// Business Memory Events
export * from './events/memory-created.event.js';
export * from './events/memory-updated.event.js';
export * from './events/memory-archived.event.js';

// Executive Memory Core
export * from './executive/core/executive-memory.js';
export * from './executive/core/executive-memory-record.js';
export * from './executive/core/executive-memory-context.js';

// Executive Memory Identity
export * from './executive/identity/executive-memory-id.js';
export * from './executive/identity/executive-owner.js';

// Executive Memory Knowledge
export * from './executive/knowledge/strategic-observation.js';
export * from './executive/knowledge/executive-assumption.js';
export * from './executive/knowledge/executive-insight.js';
export * from './executive/knowledge/lesson-learned.js';

// Executive Memory Decisions
export * from './executive/decisions/remembered-decision.js';
export * from './executive/decisions/decision-outcome.js';

// Executive Memory Goals
export * from './executive/goals/remembered-goal.js';
export * from './executive/goals/goal-progress.js';

// Executive Memory Playbooks
export * from './executive/playbooks/executive-playbook.js';
export * from './executive/playbooks/playbook-reference.js';

// Executive Memory Experience
export * from './executive/experience/executive-experience.js';
export * from './executive/experience/confidence-evolution.js';

// Executive Memory Governance
export * from './executive/governance/executive-memory-policy.js';

// Executive Memory Events
export * from './executive/events/executive-memory-created.event.js';
export * from './executive/events/executive-insight-recorded.event.js';
export * from './executive/events/lesson-learned-recorded.event.js';

// Organization Memory Core
export * from './organization/core/organization-memory.js';
export * from './organization/core/organization-memory-record.js';
export * from './organization/core/organization-context.js';

// Organization Memory Identity
export * from './organization/identity/company-profile.js';
export * from './organization/identity/mission.js';
export * from './organization/identity/vision.js';
export * from './organization/identity/core-values.js';

// Organization Memory Structure
export * from './organization/structure/business-unit.js';
export * from './organization/structure/department.js';
export * from './organization/structure/team.js';
export * from './organization/structure/organizational-role.js';

// Organization Memory Capabilities
export * from './organization/capabilities/business-capability.js';
export * from './organization/capabilities/capability-map.js';

// Organization Memory Products & Services
export * from './organization/products/product-catalog.js';
export * from './organization/products/service-catalog.js';

// Organization Memory Governance
export * from './organization/governance/policy.js';
export * from './organization/governance/governance-framework.js';
export * from './organization/governance/approval-matrix.js';

// Organization Memory Strategy
export * from './organization/strategy/strategic-initiative.js';
export * from './organization/strategy/business-objective.js';
export * from './organization/strategy/organizational-goal.js';

// Organization Memory Processes
export * from './organization/processes/business-process.js';
export * from './organization/processes/operating-model.js';

// Organization Memory Compliance
export * from './organization/compliance/compliance-obligation.js';
export * from './organization/compliance/regulatory-framework.js';

// Organization Memory Milestones
export * from './organization/milestones/organizational-milestone.js';
export * from './organization/milestones/transformation-program.js';

// Organization Memory Relationships
export * from './organization/relationships/organizational-relationship.js';
export * from './organization/relationships/dependency-map.js';

// Organization Memory Events
export * from './organization/events/organization-memory-created.event.js';
export * from './organization/events/strategic-initiative-added.event.js';
export * from './organization/events/policy-updated.event.js';

// Customer Memory Core
export * from './customer/core/customer-memory.js';
export * from './customer/core/customer-memory-record.js';
export * from './customer/core/customer-context.js';

// Customer Memory Identity
export * from './customer/identity/customer-profile.js';
export * from './customer/identity/customer-organization.js';
export * from './customer/identity/customer-contact.js';

// Customer Memory Stakeholders
export * from './customer/stakeholders/stakeholder.js';
export * from './customer/stakeholders/executive-sponsor.js';
export * from './customer/stakeholders/buying-committee.js';

// Customer Memory Business Context
export * from './customer/business/business-goal.js';
export * from './customer/business/business-challenge.js';
export * from './customer/business/success-criteria.js';

// Customer Memory Relationships
export * from './customer/relationships/relationship-health.js';
export * from './customer/relationships/communication-preference.js';
export * from './customer/relationships/executive-relationship.js';

// Customer Memory Engagement
export * from './customer/engagement/engagement-history.js';
export * from './customer/engagement/interaction-summary.js';
export * from './customer/engagement/milestone.js';

// Customer Memory Products
export * from './customer/products/product-adoption.js';
export * from './customer/products/usage-pattern.js';
export * from './customer/products/expansion-opportunity.js';

// Customer Memory Health
export * from './customer/health/customer-health.js';
export * from './customer/health/renewal-readiness.js';
export * from './customer/health/churn-risk.js';

// Customer Memory Learning & Insights
export * from './customer/insights/customer-insight.js';
export * from './customer/insights/lesson-learned.js';

// Customer Memory Governance
export * from './customer/governance/customer-memory-policy.js';

// Customer Memory Events
export * from './customer/events/customer-memory-created.event.js';
export * from './customer/events/customer-insight-recorded.event.js';
export * from './customer/events/customer-health-updated.event.js';

// Knowledge Graph Core
export * from './knowledge-graph/core/knowledge-graph.js';
export * from './knowledge-graph/core/graph-context.js';
export * from './knowledge-graph/core/graph-node.js';
export * from './knowledge-graph/core/graph-edge.js';
export * from './knowledge-graph/core/graph-path.js';

// Knowledge Graph Identity
export * from './knowledge-graph/identity/graph-node-id.js';
export * from './knowledge-graph/identity/graph-edge-id.js';

// Knowledge Graph Ontology
export * from './knowledge-graph/ontology/entity-type.js';
export * from './knowledge-graph/ontology/entity-category.js';
export { RelationshipType as GraphRelationshipType } from './knowledge-graph/ontology/relationship-type.js';
export * from './knowledge-graph/ontology/relationship-category.js';
export * from './knowledge-graph/ontology/graph-schema.js';

// Knowledge Graph Nodes
export * from './knowledge-graph/nodes/executive-node.js';
export * from './knowledge-graph/nodes/organization-node.js';
export * from './knowledge-graph/nodes/customer-node.js';
export * from './knowledge-graph/nodes/employee-node.js';
export * from './knowledge-graph/nodes/department-node.js';
export * from './knowledge-graph/nodes/team-node.js';
export * from './knowledge-graph/nodes/product-node.js';
export * from './knowledge-graph/nodes/service-node.js';
export * from './knowledge-graph/nodes/technology-node.js';
export * from './knowledge-graph/nodes/market-node.js';
export * from './knowledge-graph/nodes/capability-node.js';
export * from './knowledge-graph/nodes/initiative-node.js';
export * from './knowledge-graph/nodes/goal-node.js';
export * from './knowledge-graph/nodes/risk-node.js';
export * from './knowledge-graph/nodes/policy-node.js';
export * from './knowledge-graph/nodes/process-node.js';
export * from './knowledge-graph/nodes/workflow-node.js';
export * from './knowledge-graph/nodes/asset-node.js';

// Knowledge Graph Edges
export * from './knowledge-graph/edges/owns.edge.ts';
export * from './knowledge-graph/edges/supports.edge.ts';
export * from './knowledge-graph/edges/uses.edge.ts';
export * from './knowledge-graph/edges/depends-on.edge.ts';
export * from './knowledge-graph/edges/implements.edge.ts';
export * from './knowledge-graph/edges/reports-to.edge.ts';
export * from './knowledge-graph/edges/governs.edge.ts';
export * from './knowledge-graph/edges/funds.edge.ts';
export * from './knowledge-graph/edges/delivers.edge.ts';
export * from './knowledge-graph/edges/related-to.edge.ts';
export * from './knowledge-graph/edges/member-of.edge.ts';

// Knowledge Graph Relationships
export * from './knowledge-graph/relationships/relationship-direction.js';
export * from './knowledge-graph/relationships/relationship-strength.js';
export * from './knowledge-graph/relationships/relationship-confidence.js';
export * from './knowledge-graph/relationships/relationship-lifecycle.js';

// Knowledge Graph Queries
export * from './knowledge-graph/queries/graph-query.js';
export * from './knowledge-graph/queries/graph-filter.js';
export * from './knowledge-graph/queries/graph-traversal.js';
export * from './knowledge-graph/queries/graph-path-query.js';

// Knowledge Graph Constraints
export * from './knowledge-graph/constraints/relationship-rule.js';
export * from './knowledge-graph/constraints/node-rule.js';
export * from './knowledge-graph/constraints/ontology-rule.js';
export * from './knowledge-graph/constraints/validation-rule.js';

// Knowledge Graph Governance
export * from './knowledge-graph/governance/graph-policy.js';
export * from './knowledge-graph/governance/graph-visibility.js';
export * from './knowledge-graph/governance/graph-classification.js';

// Knowledge Graph Events
export * from './knowledge-graph/events/node-created.event.js';
export * from './knowledge-graph/events/edge-created.event.js';
export * from './knowledge-graph/events/relationship-updated.event.js';
export * from './knowledge-graph/events/ontology-updated.event.js';


