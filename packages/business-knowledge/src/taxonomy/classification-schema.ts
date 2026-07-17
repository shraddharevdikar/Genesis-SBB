export interface ClassificationSchema {
  readonly schemaId: string;
  readonly uniqueSchemaCode: string; // e.g. "SCH-CORP-ALIGN"
  readonly displayName: string;
  readonly descriptionNotes: string;
  readonly categoryCodesList: string[]; // custom structural tag classifications allowed
  readonly allowedConfidenceMinRating: number; // threshold of confidence to accept node
}
