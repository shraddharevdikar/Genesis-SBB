export interface PositioningPillar {
  readonly pillarId: string;
  readonly name: string; // e.g., "Privacy & Security", "Zero-config"
  readonly keyMessage: string;
  readonly supportingEvidence: string;
}

export interface BrandPositioning {
  readonly positioningId: string;
  readonly tenantId: string;
  readonly targetAudienceDescription: string;
  readonly marketFrameOfReference: string; // e.g., "Next-gen enterprise workspace"
  readonly corePromise: string;
  readonly pillars: PositioningPillar[];
  readonly elevatorPitch: string;
  readonly updatedAt: Date;
}
