import { PackageId } from '../identity/package-id.js';

export type LicenseCategory =
  | 'ENTERPRISE_LICENSE'
  | 'SUBSCRIPTION'
  | 'SEAT_LICENSE'
  | 'DEPARTMENT_LICENSE'
  | 'USAGE_LICENSE';

export interface LicenseProfile {
  readonly licenseId: string;
  readonly tenantId: string;
  readonly packageId: PackageId;
  readonly licenseCategory: LicenseCategory;
  readonly authorizedUsageCountLimit?: number; // e.g. Max active sessions / agents
  readonly expirationDate?: Date;
  readonly isRevoked: boolean;
  readonly issuedAt: Date;
}
