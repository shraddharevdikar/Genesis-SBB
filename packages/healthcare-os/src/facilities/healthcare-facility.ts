import { ProviderId } from '../providers/healthcare-provider.js';

export interface HealthcareFacility {
  readonly facilityId: string;
  readonly uniqueFacilityCode: string; // e.g. "FAC-ZURICH-MAIN"
  readonly associatedProviderId: ProviderId;
  readonly facilityNameString: string;
  readonly addressPhysicalString: string;
  readonly maximumBedCapacityCount: number;
  readonly contactPhoneNumber: string;
  readonly emergencyAccreditedFlag: boolean;
  readonly operationalStatus: 'ACTIVE' | 'UNDER_RENOVATION' | 'CLOSED';
}
