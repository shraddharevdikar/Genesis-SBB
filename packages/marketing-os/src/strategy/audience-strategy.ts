export type AudienceClassificationCode =
  | 'ICP_ENTERPRISE'
  | 'ICP_MIDMARKET'
  | 'DEVELOPERS_TECHNICAL'
  | 'EXECUTIVE_DECISION_MAKERS'
  | 'RETENTION_REMARKETING';

export interface AudiencePersona {
  readonly personaId: string;
  readonly displayName: string;
  readonly jobTitleFilterWordsList: string[]; // e.g. ["CFO", "VP Finance"]
  readonly companySizeMinEmployeeCount: number;
  readonly estimatedTAMCount: number; // Total Addressable Market
}

export interface AudienceStrategy {
  readonly audienceStrategyId: string;
  readonly audienceClassification: AudienceClassificationCode;
  readonly geolocationsList: string[]; // e.g. ["CH", "DE", "AT"]
  readonly primaryLanguageCodesList: string[]; // e.g. ["de", "en"]
  readonly targetPersonas: AudiencePersona[];
  readonly totalTargetAudienceEstimatedSizeCount: number;
}
