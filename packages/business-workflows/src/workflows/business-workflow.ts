import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowVersion } from '../core/workflow-version.js';
import { WorkflowLifecycle } from '../core/workflow-lifecycle.js';
import { WorkflowStage } from './workflow-stage.js';
import { ProcessId } from '@sbb/business-processes';

export type WorkflowDomainCode =
  | 'MARKETING'
  | 'SALES'
  | 'FINANCE'
  | 'HR'
  | 'LEGAL'
  | 'OPERATIONS'
  | 'CUSTOMER_SUCCESS'
  | 'HEALTHCARE'
  | 'MANUFACTURING'
  | 'CUSTOM';

export interface BusinessWorkflow {
  readonly workflowId: WorkflowId;
  readonly associatedProcessId: ProcessId;
  readonly tenantId: string;
  readonly uniqueWorkflowCode: string; // e.g. "WKF-EXPENSE-APPR"
  readonly domainCode: WorkflowDomainCode;
  readonly displayName: string;
  readonly descriptionText: string;
  readonly version: WorkflowVersion;
  readonly lifecycle: WorkflowLifecycle;
  readonly stagesList: WorkflowStage[];
}
