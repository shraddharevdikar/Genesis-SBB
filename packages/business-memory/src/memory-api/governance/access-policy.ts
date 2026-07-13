export interface AccessPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowedSubnetsOrRoles: string[];
  readonly maxRequestVelocityPerMinute: number;
  readonly encryptionRequired: boolean;
}
