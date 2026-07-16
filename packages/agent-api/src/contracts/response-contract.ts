import { ApiRequestId } from '../identity/api-request-id.js';

export interface ResponseContract {
  readonly responseId: string;
  readonly correlationRequestId: ApiRequestId;
  readonly isSuccess: boolean;
  readonly resultPayloadJson?: string;
  readonly failureErrorCode?: string;
  readonly failureDescriptionText?: string;
  readonly processedDurationMs: number;
  readonly answeredAt: Date;
}
