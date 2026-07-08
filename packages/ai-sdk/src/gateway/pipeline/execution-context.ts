import { ExecuteRequest } from '../api/execute-request.js';
import { TokenUsage } from '../../cost/token-usage.js';

export interface PipelineExecutionContext {
  readonly id: string;
  readonly request: ExecuteRequest;
  readonly startTime: number;
  tenantId: string;
  providerId?: string;
  modelId?: string;
  promptResolved?: string;
  safetyChecked?: boolean;
  usage?: TokenUsage;
  costUSD?: number;
}
