import { SchemaValidationRule } from './request-contract.js';

export interface EventContract {
  readonly contractId: string;
  readonly uniqueContractCode: string; // e.g. "CONTR-CRM-LEAD-UPDATED-EVENT"
  readonly targetEventTopicName: string; // e.g. "crm.lead.updated"
  readonly schemaVersionString: string;
  readonly schemaSpecificationJSON: string;
  readonly validationRulesList: SchemaValidationRule[];
  readonly isHistoricalReplaySupported: boolean;
}
