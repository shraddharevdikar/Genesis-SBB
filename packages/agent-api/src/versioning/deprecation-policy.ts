import { ApiVersion } from './api-version.js';

export interface DeprecationPolicy {
  readonly policyId: string;
  readonly scheduledSunsetDate: Date;
  readonly minimumNotificationDaysCount: number;
  readonly alternativeApiVersionSuggested: ApiVersion;
}
