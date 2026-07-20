export type AccessLevelCode =
  | 'READ_ONLY_AGGREGATES'
  | 'READ_WRITE_CONFIGURATION'
  | 'FULL_CONTROL_ADMINISTRATOR';

export interface DashboardAccessPolicy {
  readonly policyId: string;
  readonly uniqueAccessPolicyCode: string; // e.g. "DSH-ACC-FIN"
  readonly allowedOperatorRoleIdStringsList: string[]; // roles granted access
  readonly restrictedOperatorRoleIdStringsList: string[]; // explicit rejections
  readonly maximumPermittedAccessLevel: AccessLevelCode;
  readonly isRestrictedToInternalSbbNetworkFlag: boolean;
  readonly payloadRuleExpressionJsonString?: string; // custom access verification rules
}
