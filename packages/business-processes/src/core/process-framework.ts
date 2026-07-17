import { ProcessId } from '../identity/process-id.js';
import { ProcessStageId } from '../identity/process-stage-id.js';
import { ProcessVersionId } from '../identity/process-version-id.js';
import { ProcessContext } from './process-context.js';
import { BusinessProcess } from '../processes/business-process.js';
import { ProcessStage } from '../processes/process-stage.js';
import { BusinessRule } from '../rules/business-rule.js';
import { ProcessHealth } from '../performance/process-health.js';

export interface ProcessFramework {
  /**
   * Spawns a brand-new multi-tenant reusable business process schema template.
   */
  createProcess(
    uniqueProcessCode: string,
    domainCode: 'MARKETING' | 'SALES' | 'FINANCE' | 'HR' | 'LEGAL' | 'OPERATIONS' | 'CUSTOMER_SUCCESS' | 'HEALTHCARE' | 'MANUFACTURING' | 'CUSTOM',
    displayName: string,
    descriptionText: string,
    context: ProcessContext
  ): Promise<BusinessProcess>;

  /**
   * Appends an ordered process stage with defined inputs, outcome targets and local rules.
   */
  addStage(
    processId: ProcessId,
    stage: ProcessStage,
    context: ProcessContext
  ): Promise<ProcessStageId>;

  /**
   * Binds a validation or routing business rule constraint to a specific stage or process scope.
   */
  defineBusinessRule(
    processId: ProcessId,
    rule: BusinessRule,
    stageId: ProcessStageId | undefined,
    context: ProcessContext
  ): Promise<void>;

  /**
   * Publishes the active process version state making it discoverable for runtime engine orchestrators.
   */
  publishProcess(
    processId: ProcessId,
    context: ProcessContext
  ): Promise<ProcessVersionId>;

  /**
   * Audits compliance conformance, bottleneck indexes and overall process efficiency metrics.
   */
  evaluateProcessHealth(
    processId: ProcessId,
    context: ProcessContext
  ): Promise<ProcessHealth>;

  /**
   * Sunsets an existing process, changing state to RETIRED and disabling runtime orchestrations.
   */
  retireProcess(
    processId: ProcessId,
    context: ProcessContext
  ): Promise<void>;
}
