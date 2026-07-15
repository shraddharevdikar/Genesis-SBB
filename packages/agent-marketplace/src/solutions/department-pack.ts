import { PackageId } from '../identity/package-id.js';

export interface DepartmentPack {
  readonly packId: string;
  readonly departmentName: string; // e.g. "Cargo Operations", "Passenger Services"
  readonly targetRoleIdentifiersList: string[];
  readonly coreDigitalEmployeePackageIdsList: PackageId[];
  readonly associatedKnowledgePackageIdsList: PackageId[];
}
