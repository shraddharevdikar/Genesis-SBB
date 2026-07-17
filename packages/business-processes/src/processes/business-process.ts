import { ProcessId } from '../identity/process-id.js';
import { ProcessVersionId } from '../identity/process-version-id.js';
import { ProcessLifecycle } from '../core/process-lifecycle.js';
import { ProcessOwner } from './process-owner.js';
import { ProcessStage } from './process-stage.js';
import { ProcessObjective } from './process-objective.js';
import { ProcessDependency } from '../dependencies/process-dependency.js';

export interface BusinessProcess {
  readonly processId: ProcessId;
  readonly activeVersionId: ProcessVersionId;
  readonly tenantId: string;
  readonly uniqueProcessCode: string; // e.g. "PRC-HR-ONBOARDING", "PRC-FIN-INVOICING"
  readonly domainCode: 'MARKETING' | 'SALES' | 'FINANCE' | 'HR' | 'LEGAL' | 'OPERATIONS' | 'CUSTOMER_SUCCESS' | 'HEALTHCARE' | 'MANUFACTURING' | 'CUSTOM';
  readonly displayName: string;
  readonly descriptionText: string;
  readonly owner: ProcessOwner;
  readonly lifecycle: ProcessLifecycle;
  readonly processStagesList: ProcessStage[];
  readonly strategicObjectivesList: ProcessObjective[];
  readonly dependenciesList: ProcessDependency[];
}
