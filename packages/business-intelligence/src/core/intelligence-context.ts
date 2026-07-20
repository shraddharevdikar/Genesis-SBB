import { InsightId } from '../identity/insight-id.js';

export interface IntelligenceContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeInsightId?: InsightId;
  readonly localeCode: string; // e.g. "de-CH", "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich", "UTC"
  readonly timestamp: Date;
}
