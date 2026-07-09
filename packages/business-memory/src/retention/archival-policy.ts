export interface ArchivalPolicy {
  readonly archiveAfterDays?: number;
  readonly archiveTargetLocation?: 'COLD_STORAGE' | 'GLACIER' | 'DATABASE_ARCHIVE';
  readonly compressed: boolean;
  readonly lastArchivedAt?: Date;
}
