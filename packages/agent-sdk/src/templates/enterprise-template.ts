export interface EnterpriseTemplate {
  readonly templateCode: string;
  readonly defaultManifestJson: string;
  readonly fallbackErrorStrategiesList: string[];
  readonly enforceMfaForLocalPublish: boolean;
}
