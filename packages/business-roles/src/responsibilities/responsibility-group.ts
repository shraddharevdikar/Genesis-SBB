import { Responsibility } from './responsibility.js';

export interface ResponsibilityGroup {
  readonly groupId: string;
  readonly categoryNameString: string; // e.g. "Risk & Compliance Oversight"
  readonly descriptionText: string;
  readonly responsibilitiesList: Responsibility[];
}
