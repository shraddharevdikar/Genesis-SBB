export interface IntelligenceVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly semanticString: string; // e.g. "1.2.0"
  readonly updatedByOperatorRoleId: string;
  readonly changeNotesSummaryText: string;
  readonly createdAt: Date;
}
