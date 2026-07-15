import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface ChatTurn {
  readonly speaker: 'USER' | 'AGENT' | 'SYSTEM' | 'SUPERVISOR';
  readonly messageContent: string;
  readonly timestamp: Date;
}

export interface ConversationMemory {
  readonly referenceId: MemoryReferenceId;
  readonly conversationId: string;
  readonly turns: ChatTurn[];
  readonly detectedIntents: string[];
  readonly contextVariables: Record<string, string | number | boolean>;
  readonly lastTurnAt: Date;
}
