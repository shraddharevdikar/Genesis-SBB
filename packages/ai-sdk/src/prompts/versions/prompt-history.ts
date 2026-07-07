import { PromptStatus } from './prompt-status.js';

export interface PromptHistoryEntry {
  readonly version: string;
  readonly status: PromptStatus;
  readonly changedBy: string;
  readonly changedAt: Date | string;
  readonly comments?: string;
}

export interface PromptHistory {
  readonly promptId: string;
  readonly entries: PromptHistoryEntry[];
}
