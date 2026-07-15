export interface AgentVersion {
  readonly versionId: string;
  readonly versionNumber: string; // e.g. "1.2.0"
  readonly changeNotes?: string;
  readonly releasedAt: Date;
}
