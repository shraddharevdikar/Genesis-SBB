import { OrganizationId } from '../identity/organization-id.js';

export interface HoldingCompany {
  readonly holdingCompanyId: string;
  readonly parentOrganizationId: OrganizationId;
  readonly legalRegistrationCode: string; // e.g., CHE-123.456.789
  readonly registrationCountryCode: string; // e.g., "CH"
  readonly shareOwnershipPercentageValue: number; // e.g., 100.00
  readonly managedLegalEntityIdsList: string[];
}
