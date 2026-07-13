export enum ContextPriorityLevel {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export interface ContextPriority {
  readonly level: ContextPriorityLevel;
  readonly manualOverride: boolean;
  readonly reasonForPriority: string;
}
