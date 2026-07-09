export interface SkillGapIdentifiedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly department: string;
  readonly skillName: string;
  readonly gapScore: number;
  readonly affectedEmployeesCount: number;
  readonly detectedAt: Date;
}
