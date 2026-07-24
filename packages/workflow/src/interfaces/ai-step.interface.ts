import { IWorkflowContext } from './workflow-context.interface.js';

export interface IAIStepConfig {
  promptTemplate: string;
  modelAlias?: string;
  parameters?: Record<string, any>;
  outputKey?: string;
}

export interface IAIStepExecutor {
  executeAIStep(config: IAIStepConfig, context: IWorkflowContext): Promise<Record<string, any>>;
}
