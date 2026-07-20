export type RetentionRiskLevelCode =
  | 'LOW_STABLE'
  | 'MODERATE_TENURE_RECONCILIATION'
  | 'HIGH_FLIGHT_RISK'
  | 'CRITICAL_IMMEDIATE_INTERVENTION';

export interface AttritionDriverRecord {
  readonly driverCategoryCode: 'SALARY_COMPRESSION' | 'PROMOTION_STAGNATION' | 'LOW_PEER_RECOGNITION' | 'COMMUTE_DISTANCE' | 'OVERLOAD';
  readonly influenceWeightRatioDecimal: number; // e.g. 0.40 influence
  readonly observationSummaryText: string;
}

export interface RetentionInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-RET-SWE-04"
  readonly associatedEmployeeIdString: string;
  readonly calculatedRiskLevel: RetentionRiskLevelCode;
  readonly flightRiskProbabilityRatioDecimal: number; // e.g. 0.72 probability
  readonly detectionConfidenceScoreRatioDecimal: number; // e.g. 0.85 AI confidence
  readonly primaryDriversList: AttritionDriverRecord[];
  readonly recommendedActionPlanNotes: string; // e.g. "Trigger out-of-cycle compensation adjustment"
  readonly resolvedFlag: boolean;
  readonly createdAt: Date;
}
