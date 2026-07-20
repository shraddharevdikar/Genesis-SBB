export type PositionStatusCode =
  | 'VACANT_OPEN'
  | 'PROPOSED'
  | 'OFFER_STAGE'
  | 'OCCUPIED'
  | 'FROZEN_SUSPENDED'
  | 'ELIMINATED';

export interface WorkforcePosition {
  readonly positionId: string;
  readonly uniquePositionCode: string; // e.g. "POS-SWE-SR-042"
  readonly jobTitle: string;
  readonly targetGradeLevelString: string; // e.g., "L6", "IC-4"
  readonly associatedDepartmentIdString: string; // e.g. "DEP-ENGINEERING"
  readonly currentOccupantEmployeeIdString?: string;
  readonly budgetSalaryCapAmount: number;
  readonly currencyCode: string;
  readonly positionStatus: PositionStatusCode;
  readonly isCriticalPositionFlag: boolean; // Succession planning metric
  readonly positionOpenedDate: Date;
}
