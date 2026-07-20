export interface ExecutiveBriefing {
  readonly briefingId: string;
  readonly uniqueBriefingCode: string; // e.g. "BRF-EXE-ANNUAL-2026"
  readonly titleString: string;
  readonly targetMeetingIdString?: string; // links to board meeting or executive assembly
  readonly summaryBulletPointsList: string[];
  readonly associatedInsightIdsList: string[];
  readonly compiledByRoleIdString: string; // e.g. "CHIEF_OF_STAFF"
  readonly documentStorageURI?: string;
  readonly activeFlag: boolean;
  readonly compiledAt: Date;
}
