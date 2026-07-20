export interface DepartmentExpansionForecast {
  readonly departmentCodeString: string;
  readonly recommendedHeadcountIncreaseCount: number;
  readonly criticalSkillCompetenciesNeededList: string[];
  readonly totalEstBudgetRequiredAmount: number;
}

export interface WorkforceForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "FOR-WRK-2027-Q1"
  readonly scopeFiscalYear: number;
  readonly scopeFiscalQuarter: number;
  readonly targetHorizonMonthsCount: number; // e.g. 12 or 24 months
  readonly predictedTotalHeadcountRequiredCount: number;
  readonly confidenceIntervalLowerBoundCount: number;
  readonly confidenceIntervalUpperBoundCount: number;
  readonly departmentForecastsList: DepartmentExpansionForecast[];
  readonly calculatedAt: Date;
}
