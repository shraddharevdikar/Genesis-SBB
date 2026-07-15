export interface SkillIndex {
  readonly skillId: string;
  readonly name: string;
  readonly type: 'COGNITIVE' | 'OPERATIONAL' | 'ANALYTICAL' | 'COMMUNICATION';
  readonly associatedAgentIds: string[]; // List of active agents possessing this skill
  readonly lastIndexedAt: Date;
}
