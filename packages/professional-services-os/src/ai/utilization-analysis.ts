export interface ResourceUtilizationDiagnostic {
  readonly consultantIdString: string;
  readonly consultantNameString: string;
  readonly billableHoursVarianceRatioDecimal: number; // actual vs target variance e.g. -0.15
  readonly rootCauseDiagnosisText: string; // e.g. "Over-allocation on non-billable training tasks"
  readonly recommendedProjectRemediationIdString?: string; // Proposed target project
}

export interface UtilizationAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "ANL-UTL-2026-OCT-CLD"
  readonly targetHorizonStartDate: Date;
  readonly targetHorizonEndDate: Date;
  readonly diagnosticsList: ResourceUtilizationDiagnostic[];
  readonly totalHoursUnderutilizedCount: number;
  readonly totalPracticeRevenueLeakageProjectedAmount: number; // Potential billable revenue missed
  readonly advisorySummaryNotesText: string;
  readonly calculatedAt: Date;
}
