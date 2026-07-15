import { PackageId } from '../identity/package-id.js';

export interface AdoptionMetrics {
  readonly metricId: string;
  readonly packageId: PackageId;
  readonly activeInstallsCount: number;
  readonly weeklyDownloadsCount: number;
  readonly weeklyUninstallsCount: number;
  readonly crashOrRollbackRatePercent: number;
  readonly averageSlaAdherenceScore: number; // 0.0 - 1.0 (how well the installed capability performs in practice)
  readonly computedAt: Date;
}
