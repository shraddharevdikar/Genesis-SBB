export enum EvaluationDimension {
  STRATEGIC_VALUE = 'STRATEGIC_VALUE',
  FINANCIAL_IMPACT = 'FINANCIAL_IMPACT',
  CUSTOMER_IMPACT = 'CUSTOMER_IMPACT',
  TECHNICAL_FEASIBILITY = 'TECHNICAL_FEASIBILITY',
  OPERATIONAL_COMPLEXITY = 'OPERATIONAL_COMPLEXITY',
  RISK = 'RISK',
  TIME_TO_VALUE = 'TIME_TO_VALUE'
}

export interface EvaluationCriteria {
  readonly criteriaId: string;
  readonly dimension: EvaluationDimension;
  readonly weight: number; // e.g. 0.0 to 1.0
  readonly description: string;
}
