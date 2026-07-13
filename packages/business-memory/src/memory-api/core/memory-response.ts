import { RequestId } from '../identity/request-id.js';
import { QueryResult, ContextResult, LearningResult, GraphResult, DigitalTwinResult } from '../contracts/memory-result.js';

export interface MemoryResponse {
  readonly responseId: string;
  readonly requestId: RequestId;
  readonly tenantId: string;
  readonly status: 'SUCCESS' | 'PARTIAL_SUCCESS' | 'ACCESS_DENIED' | 'ERROR';
  readonly results: {
    readonly query?: QueryResult;
    readonly context?: ContextResult;
    readonly learning?: LearningResult;
    readonly graph?: GraphResult;
    readonly digitalTwin?: DigitalTwinResult;
  };
  readonly errorDetails?: {
    readonly code: string;
    readonly message: string;
    readonly stackTrace?: string;
  };
  readonly timestamp: Date;
}
