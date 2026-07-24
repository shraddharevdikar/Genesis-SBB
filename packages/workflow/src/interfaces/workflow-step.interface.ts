import { StepType } from '../constants/workflow.constants.js';

export interface IRetryPolicy {
  maxAttempts: number;
  backoffFactor?: number;
  delayMs?: number;
  exponential?: boolean;
}

export interface IStepCompensation {
  stepId?: string;
  action?: string;
  config?: Record<string, any>;
}

export interface IStepCondition {
  field: string;
  operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'CONTAINS' | 'IN' | 'EXISTS';
  value: any;
}

export interface IApproverConfig {
  approverType: 'USER' | 'ROLE' | 'AI' | 'SINGLE' | 'MULTIPLE';
  requiredApprovers: string[];
  approvalStrategy: 'SINGLE' | 'ALL' | 'MAJORITY' | 'SEQUENTIAL' | 'ROLE_BASED' | 'DELEGATED';
  timeoutMs?: number;
  delegateTo?: string;
}

export interface IWorkflowStep {
  id: string;
  name: string;
  type: StepType;
  order: number;
  executor?: string;
  conditions?: IStepCondition[];
  timeout?: number;
  retryPolicy?: IRetryPolicy;
  compensation?: IStepCompensation;
  approvers?: IApproverConfig;
  metadata?: Record<string, any>;
  config?: Record<string, any>;
  subWorkflowId?: string;
  parallelStepIds?: string[];
  nextStepId?: string;
}
