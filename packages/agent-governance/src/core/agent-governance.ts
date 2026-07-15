import { GovernanceContext } from './governance-context.js';
import { GovernanceSession } from './governance-session.js';
import { GovernanceId } from '../identity/governance-id.js';
import { RiskProfile } from '../risk/risk-profile.js';
import { AutonomyProfile } from '../autonomy/autonomy-profile.js';

export interface GovernanceDecisionRecord {
  readonly decisionId: string;
  readonly governanceId: GovernanceId;
  readonly tenantId: string;
  readonly targetResourceId: string;
  readonly decisionCode: 'ALLOW' | 'REJECT' | 'PENDING_APPROVAL_GATE';
  readonly reasoningText: string;
  readonly appliedPoliciesCodesList: string[];
  readonly riskLevelText: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly requiredApprovalsRolesList: string[];
  readonly auditReferenceId: string;
  readonly decidedAt: Date;
}

export interface AgentGovernance {
  /**
   * Evaluates the proposed decision, plan, or action against defined Business, Operational, and Security policies.
   */
  evaluatePolicy(
    tenantId: string,
    targetResourceId: string,
    context: GovernanceContext
  ): Promise<{
    readonly isApproved: boolean;
    readonly reasoningText: string;
    readonly appliedPolicyCodesList: string[];
  }>;

  /**
   * Assesses risks associated with proposed agent activities and returns a structured risk profile.
   */
  assessRisk(
    tenantId: string,
    targetResourceId: string,
    context: GovernanceContext
  ): Promise<RiskProfile>;

  /**
   * Determines the active autonomy level and decision limits for a given digital employee.
   */
  determineAutonomy(
    tenantId: string,
    agentId: string,
    context: GovernanceContext
  ): Promise<AutonomyProfile>;

  /**
   * Evaluates if any approval rule, matrix, or threshold requires manual intervention or supervisor sign-off.
   */
  requireApproval(
    tenantId: string,
    targetResourceId: string,
    context: GovernanceContext
  ): Promise<{
    readonly approvalRequired: boolean;
    readonly requiredRolesList: string[];
    readonly triggeredRuleId?: string;
  }>;

  /**
   * Validates if the proposed execution context complies with configured legal and organizational frameworks (e.g. GDPR, SOC 2).
   */
  validateCompliance(
    tenantId: string,
    targetResourceId: string,
    context: GovernanceContext
  ): Promise<{
    readonly isCompliant: boolean;
    readonly regulatoryViolationsList: string[];
    readonly auditLogReferenceId: string;
  }>;

  /**
   * Records an immutable ledger entry of a evaluated decision for post-execution compliance audits.
   */
  recordGovernanceDecision(
    tenantId: string,
    decision: GovernanceDecisionRecord,
    context: GovernanceContext
  ): Promise<void>;

  /**
   * Establishes a new governance session lease for evaluating a specific pipeline.
   */
  startGovernanceSession(
    tenantId: string,
    targetResourceId: string,
    context: GovernanceContext
  ): Promise<GovernanceSession>;
}
