import { ApiRequestId } from '../identity/api-request-id.js';

export interface QueryContract {
  readonly requestId: ApiRequestId;
  readonly queryTypeCode: string; // e.g. "GetActiveWorkflowBottlenecks"
  readonly filteringCriteriaPayloadJson: string;
  readonly maxRowsToFetchCount: number;
}
