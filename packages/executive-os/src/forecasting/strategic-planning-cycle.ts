export interface StrategicPlanningCycle {
  readonly cycleId: string;
  readonly uniqueCycleCode: string; // e.g. "CYC-STR-2027"
  readonly displayName: string;
  readonly targetFiscalYear: number;
  readonly activeFlag: boolean;
  readonly planningStartDate: Date;
  readonly proposalDeadlineDate: Date;
  readonly finalBoardApprovalTargetDate: Date;
  readonly cycleOwnerRoleIdString: string; // e.g. "CHIEF_OF_STAFF"
  readonly submissionIdsList: string[]; // references proposals or plans submitted
  readonly currentStage: 'INITIATION' | 'PROPOSAL_SUBMISSION' | 'CONSOLIDATION_ALIGMENT' | 'BOARD_DEFENSE' | 'COMMITTED_ACTIVE';
  readonly lastModifiedAt: Date;
}
