import { AutonomyLevelCode } from '../autonomy/autonomy-level.js';

export interface AutonomyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly targetAgentId: string;
  readonly previousAutonomyLevel: AutonomyLevelCode;
  readonly updatedAutonomyLevel: AutonomyLevelCode;
  readonly reasonNotesText: string;
  readonly modifiedByParticipantId: string; // e.g. supervisor ID or governance engine
  readonly traceId: string;
  readonly timestamp: Date;
}
