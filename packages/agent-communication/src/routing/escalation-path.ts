export interface EscalationStep {
  readonly stepSequenceNumber: number;
  readonly targetRoleId: string; // e.g. "SBB_SAFETY_CHIEF"
  readonly timeoutMinutes: number; // Duration to wait before proceeding to the next level
}

export interface EscalationPath {
  readonly pathId: string;
  readonly name: string;
  readonly severityTier: 'LOW_PRIORITY' | 'OPERATIONAL_SLA' | 'COMPLIANCE_BREACH' | 'EMERGENCY';
  readonly escalationStepsList: EscalationStep[];
  readonly lastModifiedAt: Date;
}
