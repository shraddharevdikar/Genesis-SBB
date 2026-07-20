import { BusinessTemplate } from './business-template.js';

export interface ProcessTemplate extends BusinessTemplate {
  readonly targetBusinessDomainCode: string; // e.g. "FINANCIAL_MANAGEMENT"
  readonly standardSbbProcessCode: string; // e.g. "PRC-INVOICING"
  readonly expectedDurationHoursCount: number;
  readonly isStrictSlaRuleEnforced: boolean;
}
