export interface EscalationPolicy {
  readonly escalationPolicyId: string;
  readonly stepId: string;
  readonly escalationRoleId: string;
  readonly delayMinutesBeforeEscalation: number;
  readonly alertExecutiveOwner: boolean;
}
