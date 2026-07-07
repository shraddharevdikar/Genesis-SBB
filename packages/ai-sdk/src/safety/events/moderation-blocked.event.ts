import { ModerationResult } from '../moderation/moderation-result.js';

export interface ModerationBlockedEvent {
  readonly eventType: 'moderation.blocked';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly result: ModerationResult;
  readonly reason: string;
}
