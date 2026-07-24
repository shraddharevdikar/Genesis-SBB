import { SetMetadata } from '@nestjs/common';

export const WORKFLOW_HANDLER_METADATA = 'WORKFLOW_HANDLER_METADATA';
export const WORKFLOW_STEP_HANDLER_METADATA = 'WORKFLOW_STEP_HANDLER_METADATA';

export interface WorkflowHandlerOptions {
  name: string;
  description?: string;
}

export const WorkflowHandler = (options: WorkflowHandlerOptions | string): MethodDecorator & ClassDecorator => {
  const metadata = typeof options === 'string' ? { name: options } : options;
  return SetMetadata(WORKFLOW_HANDLER_METADATA, metadata);
};

export const WorkflowStepHandler = (stepType: string): MethodDecorator => {
  return SetMetadata(WORKFLOW_STEP_HANDLER_METADATA, { stepType });
};
