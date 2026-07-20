export interface NonConformanceLog {
  readonly logId: string;
  readonly uniqueLogCode: string; // e.g. "NCR-2026-CH-0145"
  readonly associatedQualityCheckIdString?: string;
  readonly associatedBatchCodeText?: string;
  readonly defectCategory: 'DIMENSIONAL_ERROR' | 'SURFACE_FINISH_DEFECT' | 'MATERIAL_CONTAMINATION' | 'STRUCTURAL_CRACK' | 'PACKAGING_FAIL';
  readonly severityLevel: 'MINOR_MINOR' | 'MAJOR_REWORK_REQUIRED' | 'CRITICAL_SCRAP_ONLY';
  readonly descriptionText: string;
  readonly materialQuarantinedFlag: boolean;
  readonly quarantinedLocationBinLabelText?: string;
  readonly reportingStaffRoleIdString: string; // Links to HROS / Role
  readonly estimatedFinancialScrapLossAmount: number;
  readonly currencyCode: string;
  readonly dispositionDecision: 'PENDING_REVIEW' | 'USE_AS_IS_WITH_CONCESSION' | 'REWORK_TO_SPEC' | 'RE_GRADE' | 'SCRAP_DESTROY';
  readonly reviewedAt?: Date;
  readonly loggedAt: Date;
}
