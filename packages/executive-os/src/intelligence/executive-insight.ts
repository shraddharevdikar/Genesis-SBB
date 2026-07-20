export interface ExecutiveInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-EXE-REV-GROWTH-OPPORTUNITY"
  readonly summaryTitle: string;
  readonly synthesisDescriptionText: string;
  readonly crossOperatingSystemDataSourcesList: string[]; // e.g. ["FINANCE_OS", "SALES_OS"]
  readonly priorityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly associatedObjectiveIdString?: string;
  readonly analyzedAt: Date;
}
