export interface SuccessCriteria {
  readonly criteriaId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly metricName: string; // e.g., "Page Load Time reduction"
  readonly baselineValue: string; // e.g., "450ms"
  readonly targetValue: string; // e.g., "150ms"
  readonly currentValue: string; // e.g., "220ms"
  readonly measuredBySystem: string; // e.g., "Datadog Real User Monitoring"
  readonly targetDate?: Date;
  readonly status: 'PENDING' | 'PROGRESSING' | 'ACHIEVED' | 'MISSED';
  readonly lastValidatedAt?: Date;
}
