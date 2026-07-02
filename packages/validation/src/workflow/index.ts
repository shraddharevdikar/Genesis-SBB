import { z } from 'zod';
import { WorkflowStatus } from '@sbb/types';
import { 
  baseEntitySchema, 
  customMetadataSchema, 
  dateTimeSchema, 
  userIdSchema 
} from '../common/index.js';

/**
 * Zod schema for validating status metrics within an execution loop.
 */
export const workflowStatusSchema = z.nativeEnum(WorkflowStatus);

/**
 * Zod schema defining structure configuration rules for an individual step template.
 */
export const workflowStepDefinitionSchema = z.object({
  id: z.string().min(1, { message: 'Step template ID key is required' }),
  name: z.string().min(1, { message: 'Step name is required' }).max(100),
  type: z.enum(['action', 'condition', 'approval', 'delay']),
  config: customMetadataSchema,
  nextStepId: z.string().nullable().optional(),
});

/**
 * Zod schema outlining the complete architectural layout of workflow automations.
 */
export const workflowDefinitionSchema = baseEntitySchema.extend({
  name: z.string().min(1, { message: 'Workflow name is required' }).max(100),
  code: z.string().min(1, { message: 'Workflow unique system code is required' })
    .regex(/^[a-z0-9_]+$/, { message: 'Code can only contain lowercase alphanumeric characters and underscores' }),
  description: z.string().max(500).optional(),
  isActive: z.boolean(),
  steps: z.array(workflowStepDefinitionSchema).min(1, { message: 'Workflow must have at least one step configured' }),
  metadata: customMetadataSchema.optional(),
});

/**
 * Zod schema mapping a live, active, or historical run of a workflow.
 */
export const workflowInstanceSchema = baseEntitySchema.extend({
  definitionId: z.string().min(1, { message: 'Definition ID link is required' }),
  status: workflowStatusSchema,
  currentStepId: z.string().nullable().optional(),
  startedBy: userIdSchema.optional(),
  endedAt: dateTimeSchema.nullable().optional(),
  input: customMetadataSchema,
  output: customMetadataSchema.nullable().optional(),
  errors: z.array(z.string()).optional(),
});

/**
 * Zod schema recording status mutations and transition summaries during runs.
 */
export const workflowTransitionSchema = baseEntitySchema.extend({
  instanceId: z.string().min(1, { message: 'Instance ID reference is required' }),
  fromStepId: z.string().nullable().optional(),
  toStepId: z.string().min(1, { message: 'Target step ID is required' }),
  status: workflowStatusSchema,
  timestamp: dateTimeSchema,
  executionSummary: z.string().nullable().optional(),
});
