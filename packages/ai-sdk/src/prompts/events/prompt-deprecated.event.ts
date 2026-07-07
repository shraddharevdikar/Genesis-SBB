export interface PromptDeprecatedEvent {
  readonly eventType: 'prompt.deprecated';
  readonly timestamp: Date;
  readonly promptId: string;
  readonly version: string;
  readonly deprecatedBy: string;
  readonly replacementPromptId?: string;
}
