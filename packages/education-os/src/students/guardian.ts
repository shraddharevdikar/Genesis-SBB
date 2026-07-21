import { StudentId } from './student.js';

export interface StudentGuardianRelation {
  readonly studentId: StudentId;
  readonly relationshipType: 'PARENT' | 'STEP_PARENT' | 'LEGAL_GUARDIAN' | 'SPONSOR' | 'OTHER';
  readonly isPrimaryContactFlag: boolean;
  readonly hasLegalCustodyFlag: boolean;
  readonly isFinancialResponsibilityFlag: boolean;
  readonly hasPortalAccessFlag: boolean;
}

export interface Guardian {
  readonly guardianId: string;
  readonly uniqueGuardianCode: string; // e.g., "GRD-8821"
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly phoneNumberString: string;
  readonly occupationText?: string;
  readonly employerNameString?: string;
  readonly associatedStudentRelationsList: StudentGuardianRelation[];
  readonly billingAddressString?: string;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
}
