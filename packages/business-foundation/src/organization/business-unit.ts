import { BusinessId } from '../identity/business-id.js';
import { BusinessState } from '../core/business-lifecycle.js';

export interface BusinessUnit {
  readonly businessId: BusinessId;
  readonly tenantId: string;
  readonly legalName: string;
  readonly regionCode: string; // e.g. "CH", "EU"
  readonly reportingCurrencyCode: string; // e.g. "CHF", "EUR"
  readonly currentState: BusinessState;
  readonly divisionIdsList: string[];
  readonly establishedAt: Date;
}
