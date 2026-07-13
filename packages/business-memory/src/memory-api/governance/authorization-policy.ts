export interface AuthorizationPolicy {
  readonly authPolicyId: string;
  readonly tenantId: string;
  readonly roleId: string;
  readonly allowedClearances: Array<'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'>;
  readonly restrictedCapabilitiesList: string[];
}
