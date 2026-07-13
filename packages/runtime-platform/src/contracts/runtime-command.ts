export interface RuntimeCommand {
  readonly commandId: string;
  readonly tenantId: string;
  readonly action: string;
  readonly payload: Record<string, any>;
  readonly executedByRoleId: string;
  readonly forceExecution?: boolean;
}
