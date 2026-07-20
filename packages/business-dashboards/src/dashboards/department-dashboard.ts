import { BusinessDashboard } from './business-dashboard.js';

export interface DepartmentDashboard extends BusinessDashboard {
  readonly departmentIdentifierString: string; // e.g. "DEP-LEGAL"
  readonly primaryOperatorRoleIdString: string; // e.g. "ROLE-GC"
  readonly secondaryBackupOperatorRoleIdStringsList: string[];
  readonly knowledgeGlossaryTermsCount: number; // references count of loaded business glossary terms
}
