import { ExperienceModel } from './experience-model.js';

export interface OrganizationalExperience extends ExperienceModel {
  readonly affectedDepartmentIds: string[];
  readonly corporateMemoryTags: string[];
  readonly systemOfRecordRef?: string;
}
