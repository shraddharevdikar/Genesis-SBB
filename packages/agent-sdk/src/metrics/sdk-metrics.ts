export interface SdkMetrics {
  readonly metricId: string;
  readonly sdkVersion: string;
  readonly countOfActiveDeveloperSessions: number;
  readonly averageTestHarnessExecutionTimeMs: number;
  readonly percentageOfExtensionsPassingValidation: number;
  readonly countOfSignatureValidationFailures: number;
  readonly measuredAt: Date;
}
