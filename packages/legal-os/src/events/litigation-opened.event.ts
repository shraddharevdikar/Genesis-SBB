import { LitigationCase } from '../risk/litigation-case.js';
import { LegalContext } from '../core/legal-context.js';

export interface LitigationOpenedEvent {
  readonly eventId: string;
  readonly eventName: 'LITIGATION_CASE_OPENED';
  readonly payload: {
    readonly litigationCase: LitigationCase;
  };
  readonly context: LegalContext;
}
