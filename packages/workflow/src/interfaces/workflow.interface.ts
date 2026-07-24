import { WorkflowStatus } from '../constants/workflow.constants.js';
import { IWorkflowStep, IRetryPolicy } from './workflow-step.interface.js';

export interface ICompensationStrategy {
  mode: 'ALL' | 'FORWARD' | 'PARALLEL';
  stepsToCompensate?: string[];
}

export interface IWorkflowTrigger {
  type: 'MANUAL' | 'EVENT' | 'SCHEDULE' | 'WEBHOOK';
  config?: Record<string, any>;
}

export interface IWorkflowDefinition {
  id: string;
  name: string;
  version: number;
  description?: string | null;
  category: string;
  status: WorkflowStatus;
  trigger: IWorkflowTrigger;
  steps: IWorkflowStep[];
  conditions?: any;
  timeout?: number | null;
  retryPolicy?: IRetryPolicy | null;
  compensationStrategy?: ICompensationStrategy | null;
  metadata?: Record<string, any> | null;
  tenantId?: string | null;
  organizationId?: string | null;
  createdById?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
