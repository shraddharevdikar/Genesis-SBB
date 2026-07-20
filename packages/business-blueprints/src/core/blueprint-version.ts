export interface BlueprintVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly semanticString: string; // e.g. "1.0.0"
  readonly updatedByOperatorRoleId: string;
  readonly changeNotesSummaryText: string;
  readonly createdAt: Date;
}
