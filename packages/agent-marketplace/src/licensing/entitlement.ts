import { PackageId } from '../identity/package-id.js';

export interface Entitlement {
  readonly entitlementId: string;
  readonly tenantId: string;
  readonly authorizedPackageId: PackageId;
  readonly isTrialMode: boolean;
  readonly activeSeatCount: number;
  readonly maxSeatCount: number;
  readonly lastVerifiedAt: Date;
}
