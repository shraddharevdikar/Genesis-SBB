export interface SynchronizationPoint {
  readonly syncId: string;
  readonly workspaceId: string;
  readonly requiredParticipantIdsList: string[];
  readonly acknowledgedParticipantIdsList: string[];
  readonly state: 'AWAITING_PARTICIPANTS' | 'SYNCHRONIZING' | 'RESOLVED_LOCKED';
  readonly triggeredAt: Date;
  readonly synchronizedAt?: Date;
}
