export interface StreamCheckpoint {
  readonly streamId: string;
  readonly lastMessageIndex: number;
  readonly lastMessageId: string;
  readonly cursor?: string;
  readonly timestamp: Date;
}

export interface StreamResumeOption {
  readonly checkpoint: StreamCheckpoint;
  readonly resumeToken: string;
}
