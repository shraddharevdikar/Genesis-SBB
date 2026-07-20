export interface HealthcareDepartment {
  readonly departmentId: string;
  readonly uniqueDepartmentCode: string; // e.g. "DEP-ZURICH-ER" or "DEP-ZURICH-ICU"
  readonly associatedFacilityIdString: string;
  readonly departmentDisplayName: string;
  readonly clinicalCategory: 'EMERGENCY' | 'INTENSIVE_CARE' | 'PEDIATRICS' | 'CARDIOLOGY' | 'ONCOLOGY' | 'GENERAL_MEDICINE' | 'OUTPATIENT_CLINIC';
  readonly headPhysicianIdString?: string; // Chief of Department
  readonly nurseManagerIdString?: string; // Head Nurse
  readonly standardOperatingBudgetAmount: number;
  readonly currencyCode: string;
  readonly currentActiveStaffCount: number;
  readonly activeFlag: boolean;
}
