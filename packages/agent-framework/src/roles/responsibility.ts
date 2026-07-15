export interface Responsibility {
  readonly responsibilityId: string;
  readonly title: string;
  readonly description: string;
  readonly associatedCapabilityIds: string[];
}
