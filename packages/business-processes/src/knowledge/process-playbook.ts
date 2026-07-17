import { PlaybookReference } from '@sbb/business-foundation';

export interface ProcessPlaybook {
  readonly playbookId: string;
  readonly basePlaybookRef: PlaybookReference;
  readonly targetSubStageSequenceIndex?: number;
  readonly detailedStepsMarkdownText: string;
}
