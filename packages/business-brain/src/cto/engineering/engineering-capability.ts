export interface SkillCompetency {
  readonly skillName: string; // e.g., "Kubernetes", "Rust", "TensorFlow"
  readonly developerCount: number;
  readonly maturityRating: 'INITIAL' | 'DEVELOPING' | 'PROFICIENT' | 'ADVANCED' | 'EXPERT';
}

export interface EngineeringCapability {
  readonly capabilityId: string;
  readonly tenantId: string;
  readonly department: string; // e.g., "Core Infra", "Data Platform"
  readonly competencies: SkillCompetency[];
  readonly standardLanguages: string[];
  readonly cloudPlatforms: string[];
  readonly capabilityMaturityLevel: 'INITIAL' | 'REPEATABLE' | 'DEFINED' | 'MANAGED' | 'OPTIMIZING';
  readonly lastAssessedAt: Date;
}
