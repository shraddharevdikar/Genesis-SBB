import { PolicyId } from '../identity/policy-id.js';

export interface GlobalScope {
  readonly scopeId: string;
  readonly policyId: PolicyId;
  readonly targetEnvironment: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION' | 'ALL';
  readonly isSystemWideMandate: boolean;
  readonly description: string;
}
