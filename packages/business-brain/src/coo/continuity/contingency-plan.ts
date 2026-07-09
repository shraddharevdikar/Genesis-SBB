export interface ContingencyPlan {
  readonly planId: string;
  readonly triggerCondition: string; // e.g. "Primary data center offline"
  readonly immediateActions: string[];
  readonly designatedLeader: string;
  readonly targetRecoveryTimeHours: number;
}
