export type ConflictSeverityLevel = 'INFORMATIONAL' | 'WARNING_WARNING' | 'CRITICAL_BLOCK' | 'STALEMATE_ESCALATION';

export interface ConflictResolution {
  readonly conflictId: string;
  readonly severity: ConflictSeverityLevel;
  readonly description: string;
  readonly disputingParticipantIdsList: string[];
  readonly escalationPathId?: string; // Escalated if stalemate occurs
  readonly isResolved: boolean;
  readonly resolutionStrategyChosen: string; // e.g. "SUPERVISOR_DECIDES", "COMPROMISE_HEURISTIC"
  readonly resolvedAt?: Date;
}
