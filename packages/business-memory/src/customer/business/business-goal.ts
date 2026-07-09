export interface BusinessGoal {
  readonly goalId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly title: string; // e.g. "Migrate 80% workload to multi-cloud"
  readonly targetHorizonDate?: Date;
  readonly currentStateDescription?: string;
  readonly targetStateDescription: string;
  readonly progressTrackingKPIs: string[];
  readonly isAlignedWithOurOffering: boolean;
}
