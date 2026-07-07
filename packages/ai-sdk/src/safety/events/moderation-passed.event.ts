import { ModerationResult } from '../moderation/moderation-result.js';

export interface ModerationPassedEvent {
  readonly eventType: 'moderation.passed';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly result: ModerationResult;
}
