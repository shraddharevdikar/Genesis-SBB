import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface UserLoggedInPayload {
  ipAddress?: string;
  userAgent?: string;
  sessionId?: string;
}

export class UserLoggedInEvent extends BaseDomainEvent<UserLoggedInPayload> {
  constructor(data: Omit<BaseDomainEvent<UserLoggedInPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'User Logged In',
      eventType: EVENT_TYPES.USER_LOGGED_IN,
    });
  }
}
