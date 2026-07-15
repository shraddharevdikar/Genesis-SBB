export interface MarketplaceMetrics {
  readonly metricId: string;
  readonly totalPublishedPackagesCount: number;
  readonly activePublishersCount: number;
  readonly totalInstallationsCount: number;
  readonly aggregateRatingsAverage: number;
  readonly systemAdoptionFidelityPercent: number;
  readonly computedAt: Date;
}
