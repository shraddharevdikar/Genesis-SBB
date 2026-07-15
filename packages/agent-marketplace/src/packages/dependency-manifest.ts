import { PackageId } from '../identity/package-id.js';

export interface DependencyManifest {
  readonly packageId: PackageId;
  readonly minCompatibleVersion: string;
  readonly maxCompatibleVersion?: string;
  readonly isOptional: boolean;
}
