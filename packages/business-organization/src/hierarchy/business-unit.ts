import { BusinessUnitId } from '../identity/business-unit-id.js';
import { LegalEntityId } from '../identity/legal-entity-id.js';

export interface BusinessUnit {
  readonly businessUnitId: BusinessUnitId;
  readonly parentLegalEntityId: LegalEntityId;
  readonly name: string;
  readonly functionalPurposeCode: string; // e.g. "RETAIL_OPERATIONS", "LOGISTICS"
  readonly reportingRegionCode: string; // e.g. "CH-EAST"
  readonly managedDivisionIdsList: string[];
}
