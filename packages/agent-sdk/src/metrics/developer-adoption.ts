export interface DeveloperAdoption {
  readonly adoptionId: string;
  readonly totalRegisteredDevelopersCount: number;
  readonly weeklyActiveDevelopersCount: number;
  readonly totalCreatedExtensionsCount: number;
  readonly totalPackagedExtensionsCount: number;
  readonly totalSuccessfullyPublishedExtensionsCount: number;
  readonly averageDeveloperOnboardingDaysDuration: number;
  readonly computedAt: Date;
}
