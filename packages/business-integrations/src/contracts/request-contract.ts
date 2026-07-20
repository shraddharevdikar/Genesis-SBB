export interface SchemaValidationRule {
  readonly ruleId: string;
  readonly targetPropertyPath: string; // e.g. "payload.customer.email"
  readonly regexConstraintPattern?: string;
  readonly isRequiredFieldFlag: boolean;
  readonly minValueRange?: number;
  readonly maxValueRange?: number;
}

export interface RequestContract {
  readonly contractId: string;
  readonly uniqueContractCode: string; // e.g. "CONTR-CRM-CREATE-LEAD"
  readonly targetOperationName: string; // e.g. "CreateLead"
  readonly schemaVersionString: string; // e.g. "1.4.0"
  readonly schemaSpecificationJSON: string; // JSON Schema definition
  readonly validationRulesList: SchemaValidationRule[];
  readonly isStrictValidationEnabled: boolean;
}
