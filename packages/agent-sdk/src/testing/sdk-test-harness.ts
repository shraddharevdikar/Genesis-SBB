import { ExtensionContract } from '../extensions/extension-contract.js';

export interface SdkTestResult {
  readonly testId: string;
  readonly testNameString: string;
  readonly wasSuccessful: boolean;
  readonly errorLogsList?: string[];
  readonly durationMs: number;
}

export interface SdkTestHarness {
  readonly harnessId: string;
  runLocalTestSuite(
    targetExtension: ExtensionContract,
    testPayloadsList: string[]
  ): Promise<SdkTestResult[]>;
}
