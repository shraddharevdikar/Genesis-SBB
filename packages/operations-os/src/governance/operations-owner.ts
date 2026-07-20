export interface OperationsOwner {
  readonly ownerId: string;
  readonly uniqueOwnerCode: string; // e.g. "OWN-EUROPE-CENTRAL"
  readonly associatedOperatorRoleIdString: string; // Links to Role module
  readonly governedFunctionalScopeCode: 'FACILITIES' | 'LOGISTICS' | 'DATA_CENTERS' | 'CUSTOMER_CARE_CENTERS' | 'RELEASES';
  readonly authorityLevelLimitAmount: number; // Max financial authorization
  readonly currencyCode: string;
  readonly activeFlag: boolean;
}
