export interface AuditRecord {
  readonly auditId: string;
  readonly uniqueAuditCode: string; // e.g. "AUD-LEG-2026-02"
  readonly displayName: string;
  readonly category: 'INTERNAL_GOVERNANCE' | 'REGULATORY_COMPLIANCE' | 'THIRD_PARTY_CONTRACTUAL' | 'FINANCIAL_OVERSIGHT';
  readonly targetDepartmentIdString: string;
  readonly leadAuditorRoleIdString: string;
  readonly actualCostAmount: number;
  readonly currencyCode: string;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly actualEndDate?: Date;
  readonly executiveSummaryText?: string;
  readonly isCompletedFlag: boolean;
  readonly createdAt: Date;
}
