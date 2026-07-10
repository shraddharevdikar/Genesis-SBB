export interface RelationshipConfidence {
  readonly score: number; // 0.0 to 1.0 or 0 to 100 representing confidence level
  readonly lastValidatedAt?: Date;
  readonly validationSourceType: 'SYSTEM_LOG' | 'MANUAL_ENTRY' | 'EXECUTIVE_BRAIN' | 'AI_DEDUCTION';
  readonly evidenceLinks: string[]; // references/URIs to supporting evidence
}
