import { ResponsibilityId } from '../identity/responsibility-id.js';

export interface Responsibility {
  readonly responsibilityId: ResponsibilityId;
  readonly code: string; // e.g. "FINANCIAL_REPORTING"
  readonly title: string;
  readonly descriptionText: string;
  readonly classificationCode: 'CORE_EXECUTION' | 'GOVERNANCE' | 'SUPERVISORY' | 'SUPPORT';
}
