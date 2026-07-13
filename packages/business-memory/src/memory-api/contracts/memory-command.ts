export enum MemoryCommandType {
  RECORD_MEMORY = 'RECORD_MEMORY',
  RECORD_DECISION = 'RECORD_DECISION',
  RECORD_LEARNING = 'RECORD_LEARNING',
  UPDATE_TWIN = 'UPDATE_TWIN'
}

export interface MemoryCommand {
  readonly commandId: string;
  readonly tenantId: string;
  readonly commandType: MemoryCommandType;
  readonly payload: Record<string, any>;
  readonly executedByRoleId: string;
  readonly timestamp: Date;
}
