import { ApiVersion } from './api-version.js';

export interface CompatibilityPolicy {
  readonly policyId: string;
  isVersionSupported(
    requestVersion: ApiVersion,
    platformSupportMatrixJson: string
  ): Promise<boolean>;
}
