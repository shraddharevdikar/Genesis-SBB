import { RequestId } from '../identity/request-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface RuntimeContext {
  readonly requestId: RequestId;
  readonly correlationId: CorrelationId;
  readonly tenantId: string;
  readonly userId: string;
  readonly roleId: string;
  readonly clientIp?: string;
  readonly timestamp: Date;
  readonly locale: string;
  readonly baggage: Record<string, string>;
}
