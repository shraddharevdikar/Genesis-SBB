export interface PromptPublishedEvent {
  readonly eventType: 'prompt.published';
  readonly timestamp: Date;
  readonly promptId: string;
  readonly version: string;
  readonly publishedBy: string;
}
