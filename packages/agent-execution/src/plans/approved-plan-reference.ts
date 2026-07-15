export interface ApprovedPlanReference {
  readonly referenceId: string;
  readonly planId: string; // References PlanId from @sbb/agent-planning
  readonly versionNumber: number;
  readonly signatureHash: string; // Verifies the plan has not been tampered with
  readonly approvedAt: Date;
  readonly approvedByParticipantId: string;
}
