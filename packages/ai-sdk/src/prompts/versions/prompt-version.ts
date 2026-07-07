import { PromptStatus } from './prompt-status.js';
import { PromptApproval } from '../approval/prompt-approval.js';

export interface PromptVersion {
  readonly version: string; // e.g. "1.0.0"
  readonly content: string; // the prompt content template
  readonly status?: PromptStatus;
  readonly author?: string;
  readonly createdAt: Date | string;
  readonly approvedAt?: Date | string;
  readonly approval?: PromptApproval;
  readonly changelog?: string;
}
