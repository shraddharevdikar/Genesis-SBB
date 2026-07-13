import { LearningPattern } from '../patterns/learning-pattern.js';

export interface PatternDiscoveredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly pattern: LearningPattern;
  readonly discoveredByRoleId: string;
  readonly timestamp: Date;
}
