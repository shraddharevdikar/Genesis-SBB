export interface AutomationVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly semanticString: string; // e.g. "1.0.3"
  readonly updatedByOperatorRoleId: string;
  readonly changeNotesSummaryText: string;
  readonly createdAt: Date;
}
