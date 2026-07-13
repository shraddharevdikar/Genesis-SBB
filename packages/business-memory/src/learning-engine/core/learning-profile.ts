export enum LearningDomain {
  STRATEGIC = 'STRATEGIC',
  FINANCIAL = 'FINANCIAL',
  OPERATIONAL = 'OPERATIONAL',
  TECHNOLOGY = 'TECHNOLOGY',
  MARKETING = 'MARKETING',
  REVENUE = 'REVENUE',
  WORKFORCE = 'WORKFORCE',
  CUSTOMER = 'CUSTOMER'
}

export interface LearningProfile {
  readonly domain: LearningDomain;
  readonly primaryStakeholderRoleId: string;
  readonly maturityTargetLevel: number;
  readonly associatedCapabilityIds: string[];
}
