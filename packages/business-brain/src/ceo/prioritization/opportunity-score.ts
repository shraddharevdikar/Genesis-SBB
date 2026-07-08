export interface OpportunityScore {
  readonly opportunityId: string;
  readonly targetInitiativeId?: string;
  readonly title: string;
  
  // Scoring dimensions (scale of 1-10 or 1-100)
  readonly businessImpact: number;
  readonly strategicAlignment: number;
  readonly costScore: number;       // lower is better or calibrated by formula
  readonly riskScore: number;       // lower is better or calibrated by formula
  readonly timeToValue: number;     // higher is better (faster time to value)
  
  readonly overallOpportunityScore: number; // Final weighted result calculated outside the framework
  readonly confidenceIndex: number;         // 0.0 to 1.0 representing data quality
}
