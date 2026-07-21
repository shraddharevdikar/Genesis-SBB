export type ConsultantLevelCode = 'PRINCIPAL_DIRECTOR' | 'MANAGING_CONSULTANT' | 'SENIOR_CONSULTANT' | 'CONSULTANT' | 'ASSOCIATE_ANALYST';

export interface Consultant {
  readonly consultantId: string;
  readonly uniqueConsultantCode: string; // e.g. "CON-902144"
  readonly associatedStaffRoleIdString: string; // Master link to SBB HROS Employee ID
  readonly consultantNameString: string;
  readonly consultantLevel: ConsultantLevelCode;
  readonly practiceAreaCode: string; // e.g. "CLD-ENG"
  readonly targetBillableUtilizationRatioDecimal: number; // e.g. 0.80 for 80% target billability
  readonly geographicLocationRegionText: string; // For travel booking/regional assignments
  readonly costPerHourAmount: number; // Internal loaded hourly cost (FinanceOS cost accounting)
  readonly standardHourlyBillingRateAmount: number; // Default street billing rate
  readonly profileBriefText: string;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
