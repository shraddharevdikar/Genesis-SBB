export interface EmployeeRole {
  readonly roleId: string;
  readonly uniqueRoleCode: string; // e.g. "ROL-SWE-SR"
  readonly displayName: string;
  readonly jobFamilyCode: 'ENGINEERING' | 'PRODUCT' | 'SALES' | 'MARKETING' | 'FINANCE' | 'HUMAN_RESOURCES' | 'LEGAL' | 'CUSTOMER_SUCCESS';
  readonly gradeLevelString: string; // e.g. "L6"
  readonly roleResponsibilitiesNotes: string;
  readonly isOvertimeExemptFlag: boolean;
  readonly standardSalaryRangeMinimumAmount: number;
  readonly standardSalaryRangeMaximumAmount: number;
  readonly standardCurrencyCode: string;
}
