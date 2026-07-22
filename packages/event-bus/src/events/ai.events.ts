import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface AIActionRequestedPayload {
  prompt: string;
  model: string;
  contextId?: string;
}

export class AIActionRequestedEvent extends BaseDomainEvent<AIActionRequestedPayload> {
  constructor(data: Omit<BaseDomainEvent<AIActionRequestedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'AI Action Requested',
      eventType: EVENT_TYPES.AI_ACTION_REQUESTED,
    });
  }
}

export interface AIActionCompletedPayload {
  prompt: string;
  model: string;
  response: string;
  tokensUsed?: number;
}

export class AIActionCompletedEvent extends BaseDomainEvent<AIActionCompletedPayload> {
  constructor(data: Omit<BaseDomainEvent<AIActionCompletedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'AI Action Completed',
      eventType: EVENT_TYPES.AI_ACTION_COMPLETED,
    });
  }
}
