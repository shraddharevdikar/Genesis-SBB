import { AgentId } from '@sbb/agent-framework';
import { EmploymentProfile } from '../employment/employment-profile.js';
import { AvailabilityProfile } from '../availability/availability-profile.js';
import { AgentCategory } from '../classification/agent-category.js';
import { Specialization } from '../classification/specialization.js';
import { CertificationLevel } from '../classification/certification-level.js';

export interface RegistryEntry {
  readonly registryId: string;
  readonly agentId: AgentId;
  readonly name: string;
  readonly category: AgentCategory;
  readonly specializations: Specialization[];
  readonly certificationLevel: CertificationLevel;
  readonly employment: EmploymentProfile;
  readonly availability: AvailabilityProfile;
  readonly description?: string;
  readonly metadata: Record<string, string>;
}
