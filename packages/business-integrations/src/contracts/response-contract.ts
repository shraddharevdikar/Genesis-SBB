import { SchemaValidationRule } from './request-contract.js';

export interface ResponseContract {
  readonly contractId: string;
  readonly uniqueContractCode: string; // e.g. "CONTR-CRM-CREATE-LEAD-RESP"
  readonly schemaVersionString: string;
  readonly schemaSpecificationJSON: string;
  readonly validationRulesList: SchemaValidationRule[];
  readonly expectedHttpCodesList: number[]; // e.g. [200, 201]
}
