export interface PolicyVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly semanticString: string; // e.g. "1.2.0"
  readonly changedByOperatorRoleId: string;
  readonly changeLogSummary: string;
}
