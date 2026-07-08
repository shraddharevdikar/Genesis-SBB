import { ExecuteResponse } from '../api/execute-response.js';

export interface PipelineExecutionResult {
  readonly success: boolean;
  readonly response?: ExecuteResponse;
  readonly error?: Error;
}
