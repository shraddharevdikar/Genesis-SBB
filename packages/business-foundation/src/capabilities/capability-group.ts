import { BusinessCapability } from './business-capability.js';

export interface CapabilityGroup {
  readonly groupId: string;
  readonly categoryNameString: string; // e.g. "Core Financial Operations", "Strategic Market Growth"
  readonly capabilitiesList: BusinessCapability[];
}
