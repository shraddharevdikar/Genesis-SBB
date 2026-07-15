export interface SharedMemoryReference {
  readonly memoryReferenceId: string; // References memory in agent-memory
  readonly domainName: string; // e.g. "Organizational", "Project"
  readonly sharedAt: Date;
  readonly sharedByParticipantId: string;
}
