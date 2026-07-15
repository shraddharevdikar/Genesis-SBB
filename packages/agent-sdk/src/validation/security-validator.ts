import { ExtensionManifest } from '../extensions/extension-manifest.js';
import { ValidationIssue } from './contract-validator.js';

export interface SecurityValidator {
  readonly validatorId: string;
  validatePermissions(
    manifest: ExtensionManifest,
    allowedPermissionsList: string[]
  ): Promise<ValidationIssue[]>;
}
