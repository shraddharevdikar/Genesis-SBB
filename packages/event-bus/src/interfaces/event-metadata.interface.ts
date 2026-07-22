export interface IEventMetadata {
  environment?: string;
  traceId?: string;
  spanId?: string;
  retryCount?: number;
  originalTimestamp?: Date;
  ipAddress?: string;
  userAgent?: string;
  schemaVersion?: string;
  processingDurationMs?: number;
  [key: string]: any;
}
