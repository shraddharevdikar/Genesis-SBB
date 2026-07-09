export interface ToneGuide {
  readonly primaryTone: 'PROFESSIONAL' | 'CONVERSATIONAL' | 'TECHNICAL' | 'PLAYFUL';
  readonly restrictedKeywords: string[];
  readonly coreMessagingPillars: string[];
}

export interface BrandGovernance {
  readonly governanceId: string;
  readonly tenantId: string;
  readonly brandIdentityVersion: string; // e.g. "v2.1"
  readonly approvedColorPaletteHexList: string[];
  readonly approvedFontPairings: string[];
  readonly toneOfVoiceGuide: ToneGuide;
  readonly requiresCmoApprovalForLaunch: boolean;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
