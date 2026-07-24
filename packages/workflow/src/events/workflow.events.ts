import { BaseDomainEvent } from '@sbb/event-bus';
import { WORKFLOW_EVENTS } from '../constants/workflow.constants.js';

export interface WorkflowStartedPayload {
  instanceId: string;
  definitionId: string;
  name: string;
  version: number;
  input?: any;
}

export class WorkflowStartedEvent extends BaseDomainEvent<WorkflowStartedPayload> {
  constructor(data: Omit<BaseDomainEvent<WorkflowStartedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Workflow Started',
      eventType: WORKFLOW_EVENTS.WORKFLOW_STARTED,
    });
  }
}

export interface StepStartedPayload {
  instanceId: string;
  stepExecutionId: string;
  stepId: string;
  stepName: string;
  stepType: string;
}

export class StepStartedEvent extends BaseDomainEvent<StepStartedPayload> {
  constructor(data: Omit<BaseDomainEvent<StepStartedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Step Started',
      eventType: WORKFLOW_EVENTS.STEP_STARTED,
    });
  }
}

export interface StepCompletedPayload {
  instanceId: string;
  stepExecutionId: string;
  stepId: string;
  output?: any;
  durationMs?: number;
}

export class StepCompletedEvent extends BaseDomainEvent<StepCompletedPayload> {
  constructor(data: Omit<BaseDomainEvent<StepCompletedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Step Completed',
      eventType: WORKFLOW_EVENTS.STEP_COMPLETED,
    });
  }
}

export interface StepFailedPayload {
  instanceId: string;
  stepExecutionId: string;
  stepId: string;
  error: string;
  attempts: number;
}

export class StepFailedEvent extends BaseDomainEvent<StepFailedPayload> {
  constructor(data: Omit<BaseDomainEvent<StepFailedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Step Failed',
      eventType: WORKFLOW_EVENTS.STEP_FAILED,
    });
  }
}

export interface WorkflowCompletedPayload {
  instanceId: string;
  definitionId: string;
  output?: any;
  durationMs?: number;
}

export class WorkflowCompletedEvent extends BaseDomainEvent<WorkflowCompletedPayload> {
  constructor(data: Omit<BaseDomainEvent<WorkflowCompletedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Workflow Completed',
      eventType: WORKFLOW_EVENTS.WORKFLOW_COMPLETED,
    });
  }
}

export interface WorkflowCancelledPayload {
  instanceId: string;
  reason?: string;
  cancelledBy?: string;
}

export class WorkflowCancelledEvent extends BaseDomainEvent<WorkflowCancelledPayload> {
  constructor(data: Omit<BaseDomainEvent<WorkflowCancelledPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Workflow Cancelled',
      eventType: WORKFLOW_EVENTS.WORKFLOW_CANCELLED,
    });
  }
}

export interface ApprovalRequestedPayload {
  instanceId: string;
  stepId: string;
  approvalId: string;
  requiredApprovers: string[];
  approvalStrategy: string;
}

export class ApprovalRequestedEvent extends BaseDomainEvent<ApprovalRequestedPayload> {
  constructor(data: Omit<BaseDomainEvent<ApprovalRequestedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Approval Requested',
      eventType: WORKFLOW_EVENTS.APPROVAL_REQUESTED,
    });
  }
}

export interface ApprovalGrantedPayload {
  instanceId: string;
  stepId: string;
  approvalId: string;
  approverId: string;
  comment?: string;
}

export class ApprovalGrantedEvent extends BaseDomainEvent<ApprovalGrantedPayload> {
  constructor(data: Omit<BaseDomainEvent<ApprovalGrantedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Approval Granted',
      eventType: WORKFLOW_EVENTS.APPROVAL_GRANTED,
    });
  }
}

export interface ApprovalRejectedPayload {
  instanceId: string;
  stepId: string;
  approvalId: string;
  approverId: string;
  reason?: string;
}

export class ApprovalRejectedEvent extends BaseDomainEvent<ApprovalRejectedPayload> {
  constructor(data: Omit<BaseDomainEvent<ApprovalRejectedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'workflow-engine',
      eventName: 'Approval Rejected',
      eventType: WORKFLOW_EVENTS.APPROVAL_REJECTED,
    });
  }
}
