export interface DelegatedAuthority {
  readonly delegationId: string;
  readonly granterParticipantId: string;
  readonly receiverParticipantId: string;
  readonly scopeUnitId: string; // e.g. departmentId or divisionId
  readonly delegatedSpendLimitChf: number;
  readonly authorizedActionCodesList: string[]; // e.g. ["APPROVE_BUDGET", "REHIRE_AGENT"]
  readonly expiresAt?: Date;
}
