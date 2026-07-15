export interface KnowledgePackBuilder {
  readonly builderId: string;
  readonly packNameCode: string;
  addReferenceDocument(title: string, sourceUriString: string): this;
  addSemanticQueryIndexRule(filterExpressionString: string): this;
  setSovereignHostingEnforce(enforced: boolean): this;
  buildManifestJson(): string;
}
