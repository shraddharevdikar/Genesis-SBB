import { ProviderId } from './healthcare-provider.js';

export interface Nurse {
  readonly nurseId: string;
  readonly associatedProviderId: ProviderId;
  readonly uniqueNurseCode: string; // e.g. "NRS-JANE-DOE"
  readonly fullNameString: string;
  readonly nursingClassification: 'REGISTERED_NURSE_RN' | 'NURSE_PRACTITIONER_NP' | 'LICENSED_PRACTICAL_NURSE_LPN' | 'CLINICAL_NURSE_SPECIALIST_CNS';
  readonly stateNursingLicenseNumber: string;
  readonly assignedWardCodeText?: string; // links to Ward facilities
  readonly associatedStaffRoleIdString: string; // Links to HROS
  readonly canAdministerControlledSubstancesFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastCertifiedAt: Date;
}
