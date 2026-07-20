export interface IntegrationResponse {
  readonly responseId: string;
  readonly correlationRequestId: string;
  readonly httpStatusCode: number; // e.g. 200, 401, 500
  readonly payloadDataJSON: string;
  readonly headersMap: Record<string, string>;
  readonly roundTripDurationMs: number;
  readonly isSuccessFlag: boolean;
  readonly errorMessageString?: string;
  readonly timestamp: Date;
}
