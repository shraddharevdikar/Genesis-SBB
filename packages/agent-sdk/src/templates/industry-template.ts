export interface IndustryTemplate {
  readonly templateCode: string;
  readonly defaultManifestJson: string;
  readonly preconfiguredRegulatoryCompliancesList: string[]; // e.g. ["EU-RAIL-2026", "CH-BAV-SECURITY"]
  readonly regulatorySandboxUriString: string;
}
