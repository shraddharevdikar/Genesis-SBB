export interface MemoryReference {
  readonly referenceId: string;
  readonly title: string;
  readonly url?: string;
  readonly referenceType: 'DOCUMENT' | 'EMAIL' | 'Slack_THREAD' | 'CONVERSATION_LOG' | 'MEETING_MINUTES' | 'EXTERNAL_API';
  readonly addedAt: Date;
}
