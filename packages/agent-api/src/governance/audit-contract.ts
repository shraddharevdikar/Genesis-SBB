import { ApiContext } from '../core/api-context.js';

export interface AuditContract {
  readonly auditRecordId: string;
  recordApiActivity(
    requestedActionCode: string,
    success: boolean,
    durationMs: number,
    context: ApiContext
  ): Promise<void>;
}
