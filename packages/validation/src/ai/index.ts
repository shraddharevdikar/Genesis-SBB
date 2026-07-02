import { z } from 'zod';
import { AiMessageRole } from '@sbb/types';
import { 
  baseEntitySchema, 
  customMetadataSchema, 
  dateTimeSchema, 
  userIdSchema 
} from '../common/index.js';

/**
 * Zod schema for validating roles involved in AI pipelines.
 */
export const aiMessageRoleSchema = z.nativeEnum(AiMessageRole);

/**
 * Zod schema for validating structured AI chat messages.
 */
export const aiMessageSchema = z.object({
  id: z.string().min(1, { message: 'Message ID is required' }),
  role: aiMessageRoleSchema,
  content: z.string(),
  timestamp: dateTimeSchema,
  name: z.string().optional(),
  toolCallId: z.string().optional(),
});

/**
 * Zod schema for LLM generation parameters and system constraints.
 */
export const aiModelConfigSchema = z.object({
  provider: z.enum(['google', 'openai', 'anthropic']),
  model: z.string().min(1, { message: 'LLM model identifier string is required' }),
  temperature: z.number().min(0).max(2).optional(),
  maxTokens: z.number().int().positive().optional(),
  topP: z.number().min(0).max(1).optional(),
  systemInstruction: z.string().optional(),
});

/**
 * Zod schema verifying token usage costs.
 */
export const aiTokenUsageSchema = z.object({
  promptTokens: z.number().int().nonnegative(),
  completionTokens: z.number().int().nonnegative(),
  totalTokens: z.number().int().nonnegative(),
  estimatedCostUSD: z.number().nonnegative().optional(),
});

/**
 * Zod schema detailing persistent AI conversation threads.
 */
export const aiSessionSchema = baseEntitySchema.extend({
  userId: userIdSchema,
  title: z.string().min(1, { message: 'Session title is required' }).max(200),
  modelConfig: aiModelConfigSchema,
  tokenUsageSummary: aiTokenUsageSchema,
  metadata: customMetadataSchema.optional(),
});
