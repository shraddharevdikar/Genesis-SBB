import { LegalEntityId } from '../identity/legal-entity-id.js';

export interface LegalEntity {
  readonly legalEntityId: LegalEntityId;
  readonly holdingCompanyId?: string;
  readonly commercialName: string;
  readonly corporateRegistryCode: string;
  readonly taxId: string;
  readonly registeredCountryCode: string; // e.g. "CH"
  readonly operationalBusinessUnitIdsList: string[];
}
