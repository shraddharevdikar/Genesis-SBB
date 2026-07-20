export interface WorkQueue {
  readonly queueId: string;
  readonly uniqueQueueCode: string; // e.g. "QUE-SYSADMIN-TRIAGE"
  readonly queueNameString: string;
  readonly targetWorkGroupCodeString: string; // e.g. "GROUP-SYSADMINS"
  readonly pendingWorkOrderIdsList: string[];
  readonly aggregateAverageQueueWaitMinutes: number;
  readonly activeFlag: boolean;
}
