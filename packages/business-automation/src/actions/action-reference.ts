import { AutomationAction } from './automation-action.js';

export interface ActionReference extends AutomationAction {
  readonly targetExecutionURI: string; // e.g. "workflow://finance/approval" or "agent://legal-reviewer"
  readonly staticPayloadJsonString?: string; // payload values merged into execution trigger
  readonly retryAttemptsLimitCount: number; // e.g. 3 retries
}
