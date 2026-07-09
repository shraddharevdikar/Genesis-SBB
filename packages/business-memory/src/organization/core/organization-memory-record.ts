import { CompanyProfile } from '../identity/company-profile.js';
import { Mission } from '../identity/mission.js';
import { Vision } from '../identity/vision.js';
import { CoreValues } from '../identity/core-values.js';
import { BusinessUnit } from '../structure/business-unit.js';
import { Department } from '../structure/department.js';
import { Team } from '../structure/team.js';
import { OrganizationalRole } from '../structure/organizational-role.js';
import { CapabilityMap } from '../capabilities/capability-map.js';
import { ProductCatalog } from '../products/product-catalog.js';
import { ServiceCatalog } from '../products/service-catalog.js';
import { Policy } from '../governance/policy.js';
import { GovernanceFramework } from '../governance/governance-framework.js';
import { ApprovalMatrix } from '../governance/approval-matrix.js';
import { StrategicInitiative } from '../strategy/strategic-initiative.js';
import { BusinessObjective } from '../strategy/business-objective.js';
import { OrganizationalGoal } from '../strategy/organizational-goal.js';
import { BusinessProcess } from '../processes/business-process.js';
import { OperatingModel } from '../processes/operating-model.js';
import { RegulatoryFramework } from '../compliance/regulatory-framework.js';
import { TransformationProgram } from '../milestones/transformation-program.js';
import { DependencyMap } from '../relationships/dependency-map.js';

export interface OrganizationMemoryRecord {
  readonly recordId: string;
  readonly tenantId: string;
  readonly companyProfile: CompanyProfile;
  readonly mission?: Mission;
  readonly vision?: Vision;
  readonly coreValues?: CoreValues;
  
  // Organization Structure
  readonly businessUnits: BusinessUnit[];
  readonly departments: Department[];
  readonly teams: Team[];
  readonly roles: OrganizationalRole[];
  
  // Capabilities
  readonly capabilityMap?: CapabilityMap;
  
  // Product & Service catalog
  readonly productCatalog?: ProductCatalog;
  readonly serviceCatalog?: ServiceCatalog;
  
  // Governance
  readonly activePolicies: Policy[];
  readonly governanceFrameworks: GovernanceFramework[];
  readonly approvalMatrix?: ApprovalMatrix;
  
  // Strategy
  readonly strategicInitiatives: StrategicInitiative[];
  readonly businessObjectives: BusinessObjective[];
  readonly organizationalGoals: OrganizationalGoal[];
  
  // Processes
  readonly businessProcesses: BusinessProcess[];
  readonly operatingModel?: OperatingModel;
  
  // Compliance
  readonly complianceFrameworks: RegulatoryFramework[];
  
  // Milestones & Transformation
  readonly activeTransformationPrograms: TransformationProgram[];
  
  // Relationships
  readonly dependencyMap?: DependencyMap;
  
  readonly tags: string[];
  readonly version: number;
  readonly isArchived: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
