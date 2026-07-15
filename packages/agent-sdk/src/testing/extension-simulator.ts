import { ExtensionContract } from '../extensions/extension-contract.js';

export interface ExtensionSimulator {
  readonly simulatorId: string;
  loadExtension(extension: ExtensionContract): Promise<void>;
  simulateExecutionLoop(
    iterationsCount: number,
    delayMs: number
  ): AsyncGenerator<string, void, unknown>;
}
