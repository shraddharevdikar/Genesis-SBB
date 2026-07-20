export type ContractLifecycleState =
  | 'DRAFT'
  | 'INTERNAL_REVIEW'
  | 'EXTERNAL_NEGOTIATION'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'EXECUTED_ACTIVE'
  | 'EXPIRED'
  | 'TERMINATED';

export type ComplianceRequirementState =
  | 'IDENTIFIED_NEW'
  | 'UNDER_ASSESSMENT'
  | 'COMPLIANT_ACTIVE'
  | 'NON_COMPLIANT_BREACH'
  | 'SUPERSEDED_HISTORIC';

export type LitigationCaseState =
  | 'PRE_LITIGATION_THREAT'
  | 'ACTIVE_FILING'
  | 'DISCOVERY_PHASE'
  | 'TRIAL_HEARING'
  | 'SETTLED_CLOSED'
  | 'JUDGMENT_RENDERED'
  | 'APPEALED';

export type LegalApprovalState =
  | 'NOT_STARTED'
  | 'IN_PROGRESS'
  | 'APPROVED_PASSED'
  | 'REJECTED_WITH_REVISIONS'
  | 'BYPASSED';

export interface LegalLifecycle {
  readonly currentContractState: ContractLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly signatureDate?: Date;
  readonly effectiveDate?: Date;
  readonly plannedExpiryDate?: Date;
  readonly isBreachedFlag: boolean;
}
