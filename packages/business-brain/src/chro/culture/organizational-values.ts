export interface ValuesAlignmentMetric {
  readonly valueName: string; // e.g., "CUSTOMER_FIRST", "SPEED"
  readonly alignmentScore: number; // 0 to 100
  readonly implementationGapScore: number; // 0 to 100
}

export interface OrganizationalValues {
  readonly valuesId: string;
  readonly tenantId: string;
  readonly primaryCoreValues: string[];
  readonly alignmentMetrics: ValuesAlignmentMetric[];
  readonly valuesResonanceSummary: string;
  readonly lastReviewedAt: Date;
}
