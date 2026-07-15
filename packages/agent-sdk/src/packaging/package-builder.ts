import { ExtensionId } from '../identity/extension-id.js';

export interface PackageBuilder {
  readonly builderId: string;
  bundleExtensionArtifacts(
    extensionId: ExtensionId,
    sourceDirectoryPath: string
  ): Promise<ArrayBuffer>;
}
