import { PromptMetadata } from '../metadata/prompt-metadata.js';

export interface PromptCreatedEvent {
  readonly eventType: 'prompt.created';
  readonly timestamp: Date;
  readonly promptId: string;
  readonly name: string;
  readonly category?: string;
  readonly metadata?: PromptMetadata;
}
