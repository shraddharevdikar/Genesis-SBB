import { ExecutiveMemoryId } from '../identity/executive-memory-id.js';
import { ExecutiveOwner } from '../identity/executive-owner.js';
import { StrategicObservation } from '../knowledge/strategic-observation.js';
import { ExecutiveAssumption } from '../knowledge/executive-assumption.js';
import { ExecutiveInsight } from '../knowledge/executive-insight.js';
import { LessonLearned } from '../knowledge/lesson-learned.js';
import { RememberedDecision } from '../decisions/remembered-decision.js';
import { RememberedGoal } from '../goals/remembered-goal.js';
import { ExecutivePlaybook } from '../playbooks/executive-playbook.js';
import { ExecutiveExperience } from '../experience/executive-experience.js';
import { ExecutiveMemoryPolicy } from '../governance/executive-memory-policy.js';

export interface ExecutiveMemoryRecord {
  readonly id: ExecutiveMemoryId;
  readonly tenantId: string;
  readonly owner: ExecutiveOwner;
  readonly title: string;
  readonly description: string;
  
  readonly observations: StrategicObservation[];
  readonly assumptions: ExecutiveAssumption[];
  readonly insights: ExecutiveInsight[];
  readonly lessonsLearned: LessonLearned[];
  readonly decisions: RememberedDecision[];
  readonly goals: RememberedGoal[];
  readonly playbooks: ExecutivePlaybook[];
  readonly experienceIndex?: ExecutiveExperience;
  
  readonly policy?: ExecutiveMemoryPolicy;
  
  readonly tags: string[];
  readonly version: number;
  readonly isArchived: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
