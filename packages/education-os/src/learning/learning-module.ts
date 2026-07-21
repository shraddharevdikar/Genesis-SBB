export interface LearningResource {
  readonly resourceName: string;
  readonly resourceType: 'PDF_SYLLABUS' | 'VIDEO_LECTURE' | 'ONLINE_READING' | 'INTERACTIVE_PLAYGROUND' | 'EXTERNAL_LINK';
  readonly resourceURLString: string;
}

export interface LearningModule {
  readonly moduleId: string;
  readonly uniqueModuleCode: string; // e.g. "MOD-CS101-UNIT1"
  readonly associatedCourseIdString: string; // Links to Course
  readonly displayTitle: string;
  readonly moduleBriefDescriptionText: string;
  readonly presentationSequenceIndex: number; // e.g. 1, 2, 3
  readonly standardEstimatedStudyHoursCount: number; // For student pacing recommendation analytics
  readonly pedagogicalLearningObjectivesList: string[];
  readonly curatedResourcesList: LearningResource[];
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
