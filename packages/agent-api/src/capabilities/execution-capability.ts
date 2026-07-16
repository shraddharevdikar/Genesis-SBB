import { ApiContext } from '../core/api-context.js';

export interface ExecutionCapability {
  readonly capabilityId: string;
  dispatchTaskToWorkforce(
    agentFleetCode: string,
    instructionPayloadJson: string,
    context: ApiContext
  ): Promise<{ readonly trackingId: string; readonly runningStatus: string }>;

  abortActiveSession(
    sessionId: string,
    context: ApiContext
  ): Promise<{ readonly sessionId: string; readonly wasTerminated: boolean }>;
}
