import { CompetencyLevel } from './competency-level.js';
import { SkillReference } from './skill-reference.js';
import { CertificationReference } from './certification-reference.js';

export interface Competency {
  readonly competencyId: string;
  readonly uniqueCompetencyCode: string; // e.g. "COMP-FIN-01"
  readonly title: string;
  readonly categoryString: 'COGNITIVE' | 'TECHNICAL' | 'LEADERSHIP' | 'OPERATIONAL';
  readonly requiredMaturityLevel: CompetencyLevel;
  readonly matchingSkillsList: SkillReference[];
  readonly requiredCertificationsList: CertificationReference[];
}
