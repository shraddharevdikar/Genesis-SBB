import { EmploymentLifecycleState } from '../core/employee-lifecycle.js';

export interface EmployeeId {
  readonly value: string;
}

export interface Employee {
  readonly employeeId: EmployeeId;
  readonly uniqueEmployeeCode: string; // e.g. "EMP-SBB-041"
  readonly firstNameString: string;
  readonly lastNameString: string;
  readonly personalEmailString: string;
  readonly workEmailString: string;
  readonly dateOfBirth: Date;
  readonly originalHireDate: Date;
  readonly currentSupervisorEmployeeIdString?: string;
  readonly activeDepartmentIdString: string; // e.g. "DEP-ENGINEERING"
  readonly workLocationCountryCode: string; // e.g. "CH" for Switzerland
  readonly workLocationCityName: string; // e.g. "Zurich"
  readonly currentEmploymentState: EmploymentLifecycleState;
  readonly isManagerFlag: boolean;
  readonly metadataJSON?: string;
}
