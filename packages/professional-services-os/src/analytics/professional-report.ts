import { ProfessionalKPIs } from './professional-kpis.js';

export type ProfessionalReportTypeCode = 'PRACTICE_RESOURCE_UTILIZATION_LEDGER' | 'PROJECT_HEALTH_RISK_SUMMARY' | 'REVENUE_LEAKAGE_AND_WRITE_DOWNS' | 'CSAT_SCORECARD_BY_ACCOUNT';

export interface ProfessionalReportRow {
  readonly labelText: string;
  readonly categoryCodeText?: string;
  readonly numericalQuantityValue?: number;
  readonly monetaryAmountValue?: number;
  readonly ratioPercentageDecimal?: number;
}

export interface ProfessionalReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "REP-PSA-2026-Q3"
  readonly reportType: ProfessionalReportTypeCode;
  readonly targetPracticeAreaCode?: string; // If scoped to a particular area (e.g. "CLD-ENG")
  readonly generatedByStaffRoleIdString: string; // Links to ExecutiveOS/HROS
  readonly generatedAtTimestamp: Date;
  readonly metricsRowsList: ProfessionalReportRow[];
  readonly coreKpiSnapshot?: ProfessionalKPIs;
  readonly partnerExecutiveSummaryNotesText?: string; // High-level governance recommendations
}
