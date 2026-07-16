import { DepartmentId } from '../identity/department-id.js';

export type CapabilityMaturityLevelCode =
  | 'INITIAL'
  | 'MANAGED'
  | 'DEFINED'
  | 'QUANTITATIVELY_MANAGED'
  | 'OPTIMIZING';

export interface BusinessCapability {
  readonly capabilityId: string;
  readonly uniqueCapabilityCode: string; // e.g. "LEDGER_CONCILIATION", "CAMPAIGN_ATTRIBUTION"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly ownerDepartmentId: DepartmentId;
  readonly maturityLevel: CapabilityMaturityLevelCode;
  readonly automatedPercentageRatio: number; // e.g. 0.0 - 100.0
}
