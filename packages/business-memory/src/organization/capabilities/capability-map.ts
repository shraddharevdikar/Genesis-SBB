import { BusinessCapability } from './business-capability.js';

export interface CapabilityHierarchyNode {
  readonly capability: BusinessCapability;
  readonly subCapabilities: CapabilityHierarchyNode[];
}

export interface CapabilityMap {
  readonly mapId: string;
  readonly tenantId: string;
  readonly businessModelType: 'B2B_SAAS' | 'E_COMMERCE' | 'FINTECH' | 'MANUFACTURING' | 'OTHER';
  readonly rootNodes: CapabilityHierarchyNode[];
  readonly totalCapabilitiesCount: number;
  readonly strategicFocusAreaSummary: string;
  readonly updatedAt: Date;
}
