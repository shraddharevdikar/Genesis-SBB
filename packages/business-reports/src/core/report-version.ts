export interface ReportVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly semanticString: string; // e.g. "2.4.1"
  readonly updatedByOperatorRoleId: string;
  readonly compilationSummaryText: string;
  readonly createdAt: Date;
}
