import { MemoryReference } from './memory-reference.js';

export interface WorkingMemory {
  readonly activeTaskContext?: string;
  readonly recentDecisions: string[];
  readonly bufferedMessages: string[];
  get(key: string): any;
  set(key: string, value: any): void;
  clear(): void;
}

export interface ExecutiveMemory {
  readonly workingMemory: WorkingMemory;
  readonly longTermMemory: MemoryReference[];
  readonly organizationalMemory: MemoryReference[];

  retrieve(query: string, limit?: number): Promise<MemoryReference[]>;
  store(reference: MemoryReference): Promise<void>;
}
