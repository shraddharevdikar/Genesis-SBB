import { PrivacyLevel } from '../../governance/privacy-level.js';

export interface ContextVisibility {
  readonly contextId: string;
  readonly tenantId: string;
  readonly defaultPrivacyLevel: PrivacyLevel;
  readonly allowedRoleIds: string[];
  readonly dynamicClearanceRequired?: string;
  readonly isMaskedForCompliance: boolean;
}
