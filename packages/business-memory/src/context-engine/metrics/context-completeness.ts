export interface ContextCompleteness {
  readonly completenessId: string;
  readonly tenantId: string;
  readonly ratioPercent: number; // e.g. 85.5%
  readonly missingRequiredDimensions: string[];
  readonly gapSeverity: 'NONE' | 'LOW' | 'MEDIUM' | 'CRITICAL';
  readonly measuredAt: Date;
}
