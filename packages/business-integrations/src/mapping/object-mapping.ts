import { FieldMapping } from './field-mapping.js';

export interface ObjectMapping {
  readonly objectMappingId: string;
  readonly uniqueMappingCode: string; // e.g. "MAP-SFC-TO-SBB-LEAD"
  readonly sourceObjectTypeName: string; // e.g. "Salesforce_Lead"
  readonly targetObjectTypeName: string; // e.g. "SBB_Lead"
  readonly fieldMappingsList: FieldMapping[];
  readonly schemaVersionString: string;
  readonly isStrictTypeValidationRequired: boolean;
}
