export enum RelationshipType {
  SUPPORTS = 'SUPPORTS',
  CONTRADICTS = 'CONTRADICTS',
  DUPLICATES = 'DUPLICATES',
  ELABORATES = 'ELABORATES',
  CAUSES = 'CAUSES',
  DEPENDS_ON = 'DEPENDS_ON',
  PART_OF = 'PART_OF'
}

export interface RelatedMemory {
  readonly sourceMemoryId: string;
  readonly targetMemoryId: string;
  readonly relationshipType: RelationshipType;
  readonly strength: number; // 0.0 to 1.0 (confidence/strength weight)
  readonly description?: string;
  readonly linkedAt: Date;
}
