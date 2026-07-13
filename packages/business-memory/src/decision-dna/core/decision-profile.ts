export enum DecisionCategory {
  STRATEGIC = 'STRATEGIC',
  TACTICAL = 'TACTICAL',
  OPERATIONAL = 'OPERATIONAL',
  FINANCIAL = 'FINANCIAL',
  TECHNOLOGY = 'TECHNOLOGY',
  MARKETING = 'MARKETING',
  REVENUE = 'REVENUE',
  WORKFORCE = 'WORKFORCE',
  RISK = 'RISK',
  COMPLIANCE = 'COMPLIANCE'
}

export enum DecisionUrgency {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export enum DecisionImpactScope {
  ENTERPRISE = 'ENTERPRISE',
  DIVISIONAL = 'DIVISIONAL',
  DEPARTMENTAL = 'DEPARTMENTAL',
  TEAM_LEVEL = 'TEAM_LEVEL'
}

export interface DecisionProfile {
  readonly category: DecisionCategory;
  readonly urgency: DecisionUrgency;
  readonly impactScope: DecisionImpactScope;
  readonly estimatedFinancialImpactUSD?: number;
  readonly targetImplementationDate?: Date;
}
