import { WorkflowStatus, StepStatus } from '../constants/workflow.constants.js';
import { IWorkflowContext } from './workflow-context.interface.js';
import { IApprovalRecord } from './approval.interface.js';

export interface IWorkflowStepExecution {
  id: string;
  instanceId: string;
  stepId: string;
  stepName: string;
  stepType: string;
  status: StepStatus;
  attempts: number;
  maxAttempts: number;
  input?: any;
  output?: any;
  error?: string | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  durationMs?: number | null;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWorkflowInstance {
  id: string;
  definitionId: string;
  name: string;
  version: number;
  status: WorkflowStatus;
  currentStepId?: string | null;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  context: IWorkflowContext;
  input?: any;
  output?: any;
  errorMessage?: string | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  stepExecutions?: IWorkflowStepExecution[];
  approvals?: IApprovalRecord[];
  logs?: any[];
}
