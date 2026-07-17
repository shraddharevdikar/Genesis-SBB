import { BusinessRole } from './business-role.js';

export interface CustomRole {
  readonly baseRoleDetails: BusinessRole;
  readonly schemaDefinitionJsonString: string; // custom metadata structure
  readonly isRestrictedToSingleDivisionId?: string;
  readonly customRoleTagsList: string[];
}
