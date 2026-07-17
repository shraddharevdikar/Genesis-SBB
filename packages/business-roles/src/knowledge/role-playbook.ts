import { PlaybookReference } from '@sbb/business-foundation';

export interface RolePlaybook {
  readonly rolePlaybookId: string;
  readonly corePlaybookRef: PlaybookReference;
  readonly localizedRoleDirectivesNotes?: string;
  readonly restrictionClassificationCode: 'PUBLIC' | 'DEPARTMENTAL' | 'SENSITIVE_ROLE_ONLY';
  readonly lastReviewedAt: Date;
}
