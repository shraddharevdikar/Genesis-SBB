import { PackageId } from '../identity/package-id.js';
import { CertificationLevel } from '../governance/certification-policy.js';

export interface VerificationStatus {
  readonly verificationId: string;
  readonly packageId: PackageId;
  readonly versionString: string;
  readonly currentCertificationLevel: CertificationLevel;
  readonly lastPassedSecurityScanDate: Date;
  readonly isVulnerabilityScanClean: boolean;
  readonly areUnitTestsSuccessful: boolean;
  readonly isApprovedByCiso: boolean;
}
