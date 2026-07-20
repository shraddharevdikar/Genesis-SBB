import { ReportSection } from './report-section.js';

export interface ReportChapter {
  readonly chapterId: string;
  readonly uniqueChapterCode: string; // e.g. "CHP-01-FINANCE-OVERVIEW"
  readonly displayTitleName: string;
  readonly descriptionNotesText?: string;
  readonly sortingOrderIndex: number;
  readonly childSectionsList: ReportSection[];
}
