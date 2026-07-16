import { ApiRequestId } from '../identity/api-request-id.js';

export interface CallbackContract {
  readonly callbackId: string;
  readonly associatedRequestId: ApiRequestId;
  readonly callbackTargetUriString: string;
  
  /**
   * Dispatches execution results back to external system.
   */
  dispatchCallbackResponse(
    responsePayloadJson: string
  ): Promise<{ readonly wasDelivered: boolean; readonly httpResponseCode: number }>;
}
