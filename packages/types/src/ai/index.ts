import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Structural participant identities in an AI chat conversation.
 */
export enum AiMessageRole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
  TOOL = 'tool'
}

/**
 * Standard structured chat messages for LLM integrations.
 */
export interface AiMessage {
  id: string;
  role: AiMessageRole;
  content: string;
  timestamp: string;
  name?: string;               // Optional descriptor for agents or specific tools
  toolCallId?: string;         // References the associated Tool Call
}

/**
 * Tracks AI active sessions or user chat thread boundaries.
 */
export interface AiSession extends BaseEntity {
  userId: string;
  title: string;
  modelConfig: AiModelConfig;
  tokenUsageSummary: AiTokenUsage;
  metadata?: CustomMetadata;
}

/**
 * Model selection, temperature, and formatting instructions.
 */
export interface AiModelConfig {
  provider: 'google' | 'openai' | 'anthropic';
  model: string;              // e.g., 'gemini-2.5-flash', 'gpt-4o'
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  systemInstruction?: string;
}

/**
 * Exact token billing and rate-limiting metrics.
 */
export interface AiTokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCostUSD?: number;
}
