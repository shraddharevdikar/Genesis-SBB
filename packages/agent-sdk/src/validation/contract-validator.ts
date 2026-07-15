import { ExtensionContract } from '../extensions/extension-contract.js';

export interface ValidationIssue {
  readonly code: string;
  readonly severity: 'INFO' | 'WARNING' | 'ERROR';
  readonly description: string;
}

export interface ContractValidator {
  readonly validatorId: string;
  validateInterfaceCompliance(
    targetExtension: ExtensionContract
  ): Promise<ValidationIssue[]>;
}
