export type StrategicImportanceLevel = 'TACTICAL' | 'GROWTH' | 'STRATEGIC' | 'MISSION_CRITICAL';

export type CustomerLifecycleStage = 'PROSPECT' | 'ONBOARDING' | 'ACTIVE_ADOPTION' | 'MATURE' | 'EXPANSION' | 'AT_RISK' | 'CHURNED';

export interface CustomerProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly organizationId: string; // references CustomerOrganization
  readonly targetRegion: 'AMER' | 'EMEA' | 'APAC' | 'LATAM' | 'GLOBAL';
  readonly strategicImportance: StrategicImportanceLevel;
  readonly lifecycleStage: CustomerLifecycleStage;
  readonly customerSince?: Date;
  readonly primaryIndustry: string;
  readonly notes?: string;
}
