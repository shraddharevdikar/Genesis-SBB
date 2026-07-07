import { PromptCategory } from '../templates/prompt-category.js';
import { PromptPurpose } from '../templates/prompt-purpose.js';
import { PromptMetadata } from '../metadata/prompt-metadata.js';

export interface PromptDescriptor {
  readonly promptId: string;
  readonly name: string;
  readonly activeVersion: string;
  readonly category?: PromptCategory;
  readonly purpose?: PromptPurpose;
  readonly capability?: string;
  readonly metadata?: PromptMetadata;
}
