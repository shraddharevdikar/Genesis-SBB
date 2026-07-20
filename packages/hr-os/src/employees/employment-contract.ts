import { EmployeeId } from './employee.js';

export type ContractTypeCode =
  | 'PERMANENT_INDEFINITE'
  | 'FIXED_TERM_TEMPORARY'
  | 'FREELANCE_CONTRACTOR'
  | 'INTERNSHIP';

export interface EmploymentContract {
  readonly contractId: string;
  readonly uniqueContractCode: string; // e.g. "CON-SBB-1294"
  readonly associatedEmployeeId: EmployeeId;
  readonly contractType: ContractTypeCode;
  readonly signingDate: Date;
  readonly effectiveStartDate: Date;
  readonly plannedEndDate?: Date;
  readonly weeklyStandardWorkingHoursCount: number; // e.g. 40 or 42.5 in CH
  readonly capacityFteRatioDecimal: number; // e.g. 1.0 for full-time, 0.8 for part-time
  readonly probationPeriodDaysCount: number; // e.g. 90
  readonly noticePeriodDaysCount: number; // e.g. 90 for typical CH contracts
  readonly legalJurisdictionCode: string; // e.g. "CH-ZH"
  readonly documentReferenceURI: string;
}
