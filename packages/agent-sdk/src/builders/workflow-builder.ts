export interface WorkflowStepDefinition {
  readonly stepId: string;
  readonly title: string;
  readonly designatedAgentRoleCode: string;
  readonly rollbackCompensatingStepId?: string;
  readonly stepPayloadSchemaJson: string;
}

export interface WorkflowBuilder {
  readonly builderId: string;
  readonly workflowCode: string;
  addStep(step: WorkflowStepDefinition): this;
  setSequentialOrdering(stepIdsList: string[]): this;
  setSlaDeadlineHours(hours: number): this;
  buildManifestJson(): string;
}
