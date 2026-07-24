export interface IWorkflowContext {
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  variables: Record<string, any>;
  stepResults: Record<string, any>;
  traceId?: string;
  correlationId?: string;
  [key: string]: any;
}
