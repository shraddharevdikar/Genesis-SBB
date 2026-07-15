import { DependencyManifest } from './dependency-manifest.js';

export interface PackageVersion {
  readonly versionString: string; // e.g. "1.2.0"
  readonly changeLogNotes: string;
  readonly dependenciesList: DependencyManifest[];
  readonly codeArtifactHash: string; // Integrity verification
  readonly sourceZipUri: string;
  readonly releasedAt: Date;
}
