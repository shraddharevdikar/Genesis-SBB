export interface ApiVersion {
  readonly majorVersionNumber: number;
  readonly minorVersionNumber: number;
  readonly patchVersionNumber: number;
  readonly releaseDate: Date;
  readonly isActiveRelease: boolean;
  readonly isDeprecatedRelease: boolean;
}
