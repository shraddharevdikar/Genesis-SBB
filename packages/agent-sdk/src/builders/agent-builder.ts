import { ExtensionId } from '../identity/extension-id.js';

export interface AgentBuilder {
  readonly builderId: string;
  readonly targetAgentName: string;
  setBaseModel(modelNameString: string): this;
  setSystemInstructions(instructionsList: string[]): this;
  addSkillExtension(skillExtensionId: ExtensionId): this;
  addKnowledgeExtension(knowledgeExtensionId: ExtensionId): this;
  setMultiTenancyEnabled(enabled: boolean): this;
  buildManifestJson(): string;
}
