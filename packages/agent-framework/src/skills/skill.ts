export interface Skill {
  readonly skillId: string;
  readonly name: string; // e.g. "PDF Invoice Extractor", "Drizzle SQL Query Builder"
  readonly type: 'COGNITIVE' | 'OPERATIONAL' | 'ANALYTICAL' | 'COMMUNICATION';
  readonly sourceCodeHash?: string;
  readonly schemaPayload: string; // Description of skill parameters and return types
  readonly minConfidenceRequired: number; // 0.0 - 1.0
}
