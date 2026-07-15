import { SdkContext } from './sdk-context.js';
import { SdkSession } from './sdk-session.js';
import { ExtensionId } from '../identity/extension-id.js';
import { ExtensionContract } from '../extensions/extension-contract.js';
import { ExtensionManifest } from '../extensions/extension-manifest.js';
import { ValidationIssue } from '../validation/contract-validator.js';
import { SdkTestResult } from '../testing/sdk-test-harness.js';
import { PackageSignature } from '../packaging/package-signature.js';

export interface AgentSDK {
  /**
   * Initializes a new extension project scaffold from a template.
   */
  createExtension(
    templateCode: string,
    projectName: string,
    context: SdkContext
  ): Promise<SdkSession>;

  /**
   * Validates interface contract conformity, permissions, and security criteria.
   */
  validateExtension(
    extensionId: ExtensionId,
    manifest: ExtensionManifest,
    contractInstance: ExtensionContract,
    context: SdkContext
  ): Promise<ValidationIssue[]>;

  /**
   * Evaluates the extension inside a mock runtime simulation environment.
   */
  testExtension(
    extensionId: ExtensionId,
    contractInstance: ExtensionContract,
    testPayloadsList: string[],
    context: SdkContext
  ): Promise<SdkTestResult[]>;

  /**
   * Bundles compiled workspace components into signed deployment artifacts.
   */
  packageExtension(
    extensionId: ExtensionId,
    sourceDirectoryPath: string,
    context: SdkContext
  ): Promise<{ readonly payload: ArrayBuffer; readonly signature: PackageSignature }>;

  /**
   * Publishes the validated and signed package to the marketplace staging area.
   */
  publishExtension(
    extensionId: ExtensionId,
    packagePayload: ArrayBuffer,
    signature: PackageSignature,
    context: SdkContext
  ): Promise<void>;

  /**
   * Assesses backward compatibility and version overlap against standard models.
   */
  verifyCompatibility(
    extensionId: ExtensionId,
    proposedVersionString: string,
    context: SdkContext
  ): Promise<{ readonly isCompatible: boolean; readonly detectedConflictsList: string[] }>;
}
