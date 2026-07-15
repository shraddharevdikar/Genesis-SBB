export interface SkillBuilder {
  readonly builderId: string;
  readonly targetSkillCode: string;
  setInvocationTrigger(triggerRegexString: string): this;
  addInputParameter(name: string, type: 'string' | 'number' | 'boolean', isRequired: boolean): this;
  addOutputSchemaJson(schemaJson: string): this;
  setSlaTimeoutMs(timeoutMs: number): this;
  buildManifestJson(): string;
}
