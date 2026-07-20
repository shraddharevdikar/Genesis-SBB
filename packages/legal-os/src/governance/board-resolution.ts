export interface BoardResolution {
  readonly resolutionId: string;
  readonly uniqueResolutionCode: string; // e.g. "RES-BOARD-2026-12"
  readonly meetingDate: Date;
  readonly titleString: string;
  readonly resolvedClausesJSON: string; // Serialized list of resolved clauses
  readonly proposedByOperatorRoleIdString: string;
  readonly secondByOperatorRoleIdString?: string;
  readonly votesInFavorCount: number;
  readonly votesAgainstCount: number;
  readonly abstentionsCount: number;
  readonly passedFlag: boolean;
  readonly resolutionDocumentURI?: string;
  readonly recordedAt: Date;
}
