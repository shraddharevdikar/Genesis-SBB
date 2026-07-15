export interface VersionManifest {
  readonly versionString: string;
  readonly releaseNotesString: string;
  readonly minimumRequiredSdkVersion: string;
  readonly backCompatibleUntilVersionString?: string;
  readonly releaseChannelCode: 'STABLE' | 'BETA' | 'NIGHTLY';
  readonly publishedAt: Date;
}
