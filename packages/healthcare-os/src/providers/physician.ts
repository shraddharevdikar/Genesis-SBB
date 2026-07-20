import { ProviderId } from './healthcare-provider.js';

export interface Physician {
  readonly physicianId: string;
  readonly associatedProviderId: ProviderId;
  readonly uniquePhysicianCode: string; // e.g. "PHY-DR-SMITH"
  readonly fullNameString: string;
  readonly associatedStaffRoleIdString: string; // Role link to HROS (e.g. "CHIEF_OF_MEDICINE" or "ATTENDING_PHYSICIAN")
  readonly stateMedicalLicenseNumber: string;
  readonly licenseValidUntilDate: Date;
  readonly primarySpecialtyText: string; // e.g. "Cardiology"
  readonly contactEmailAddress: string;
  readonly contactPhoneNumber: string;
  readonly hasPrescribingAuthorityFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly registeredAt: Date;
}
