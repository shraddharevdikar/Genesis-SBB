import { ExtensionManifest } from '../extensions/extension-manifest.js';
import { ValidationIssue } from './contract-validator.js';

export interface CompatibilityValidator {
  readonly validatorId: string;
  validateVersionCompatibility(
    manifest: ExtensionManifest,
    targetFrameworkVersion: string
  ): Promise<ValidationIssue[]>;
}
