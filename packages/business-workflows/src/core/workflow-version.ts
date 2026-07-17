export interface WorkflowVersion {
  readonly majorVersion: number;
  readonly minorVersion: number;
  readonly patchVersion: number;
  readonly uniqueVersionSignature: string; // e.g. "v1.2.0-hash"
  readonly createdAt: Date;
  readonly releaseNotesText?: string;
}
