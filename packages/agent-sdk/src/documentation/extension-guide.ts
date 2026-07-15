export interface ExtensionGuideChapter {
  readonly chapterNumber: number;
  readonly title: string;
  readonly summaryDescription: string;
  readonly markdownBodyText: string;
}

export interface ExtensionGuide {
  readonly guideId: string;
  readonly audienceProfileCode: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  readonly chaptersList: ExtensionGuideChapter[];
}
