import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard processing states for a workflow execution.
 */
export enum WorkflowStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  SUSPENDED = 'suspended'
}

/**
 * Declares the architectural template for automated workflows.
 */
export interface WorkflowDefinition extends BaseEntity {
  name: string;
  code: string;               // e.g., 'document_approval_flow'
  description?: string;
  isActive: boolean;
  steps: WorkflowStepDefinition[];
  metadata?: CustomMetadata;
}

/**
 * Standard configuration rules for a step within a workflow template.
 */
export interface WorkflowStepDefinition {
  id: string;                 // unique key in definition
  name: string;
  type: 'action' | 'condition' | 'approval' | 'delay';
  config: CustomMetadata;
  nextStepId?: string | null;
}

/**
 * Tracks an active or historic execution of a workflow.
 */
export interface WorkflowInstance extends BaseEntity {
  definitionId: string;
  status: WorkflowStatus;
  currentStepId?: string | null;
  startedBy?: string;
  endedAt?: string | null;
  input: CustomMetadata;
  output?: CustomMetadata | null;
  errors?: string[];
}

/**
 * State transitions and transition logs recorded during workflow execution.
 */
export interface WorkflowTransition extends BaseEntity {
  instanceId: string;
  fromStepId?: string | null;
  toStepId: string;
  status: WorkflowStatus;
  timestamp: string;
  executionSummary?: string | null;
}
