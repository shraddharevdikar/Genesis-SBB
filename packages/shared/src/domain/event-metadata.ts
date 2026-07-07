export interface EventMetadata {
  correlationId?: string;
  causationId?: string;
  tenantId?: string;
  userId?: string;
  sourceModule?: string;
  [key: string]: any;
}
