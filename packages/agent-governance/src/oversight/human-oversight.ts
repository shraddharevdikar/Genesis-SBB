export interface HumanInterventionRecord {
  readonly recordId: string;
  readonly supervisorParticipantId: string;
  readonly actionTaken: 'FREEZE_SESSION' | 'RESUME_SESSION' | 'MANUAL_STEP_EDIT' | 'FORCE_ROLLBACK_NOW' | 'SHUTDOWN_COGNITIVE_NODES';
  readonly reasonNotesText: string;
  readonly appliedAt: Date;
}

export interface HumanOversight {
  readonly oversightId: string;
  readonly targetResourceId: string; // The session, plan, or execution being overseen
  readonly activeSupervisorsList: string[]; // Set of supervisor IDs registered for active oversight
  readonly recordedInterventionsList: HumanInterventionRecord[];
  readonly isCurrentlyFrozen: boolean;
  readonly frozenAt?: Date;
}
