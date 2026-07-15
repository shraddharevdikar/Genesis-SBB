import { ExtensionId } from '../identity/extension-id.js';

export interface DepartmentBuilder {
  readonly builderId: string;
  readonly departmentNameCode: string;
  setOperatingBudgetCappingChf(amount: number): this;
  addDigitalEmployee(agentExtensionId: ExtensionId): this;
  addGoverningPolicy(policyExtensionId: ExtensionId): this;
  buildManifestJson(): string;
}
