import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface WorkflowStartedPayload {
  workflowId: string;
  name: string;
  triggerSource: string;
}

export class WorkflowStartedEvent extends BaseDomainEvent<WorkflowStartedPayload> {
  constructor(data: Omit<BaseDomainEvent<WorkflowStartedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Workflow Started',
      eventType: EVENT_TYPES.WORKFLOW_STARTED,
    });
  }
}

export interface WorkflowCompletedPayload {
  workflowId: string;
  status: 'SUCCESS' | 'FAILED' | 'TERMINATED';
  durationMs: number;
}

export class WorkflowCompletedEvent extends BaseDomainEvent<WorkflowCompletedPayload> {
  constructor(data: Omit<BaseDomainEvent<WorkflowCompletedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Workflow Completed',
      eventType: EVENT_TYPES.WORKFLOW_COMPLETED,
    });
  }
}

export interface TaskCompletedPayload {
  taskId: string;
  title: string;
  assigneeId?: string;
}

export class TaskCompletedEvent extends BaseDomainEvent<TaskCompletedPayload> {
  constructor(data: Omit<BaseDomainEvent<TaskCompletedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Task Completed',
      eventType: EVENT_TYPES.TASK_COMPLETED,
    });
  }
}

export interface InvoiceApprovedPayload {
  invoiceId: string;
  amount: number;
  currency: string;
  approverId: string;
}

export class InvoiceApprovedEvent extends BaseDomainEvent<InvoiceApprovedPayload> {
  constructor(data: Omit<BaseDomainEvent<InvoiceApprovedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Invoice Approved',
      eventType: EVENT_TYPES.INVOICE_APPROVED,
    });
  }
}

export interface DocumentUploadedPayload {
  documentId: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
}

export class DocumentUploadedEvent extends BaseDomainEvent<DocumentUploadedPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentUploadedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Document Uploaded',
      eventType: EVENT_TYPES.DOCUMENT_UPLOADED,
    });
  }
}

export interface CampaignPublishedPayload {
  campaignId: string;
  title: string;
  channel: string;
}

export class CampaignPublishedEvent extends BaseDomainEvent<CampaignPublishedPayload> {
  constructor(data: Omit<BaseDomainEvent<CampaignPublishedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Campaign Published',
      eventType: EVENT_TYPES.CAMPAIGN_PUBLISHED,
    });
  }
}
