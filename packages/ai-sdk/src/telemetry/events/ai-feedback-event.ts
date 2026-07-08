import { TelemetryContext } from '../tracking/telemetry-context.js';
import { UserFeedback } from '../feedback/user-feedback.js';

export interface AIFeedbackRecordedEvent {
  readonly eventId: string;
  readonly eventType: 'feedback.recorded';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly feedback: UserFeedback;
}
