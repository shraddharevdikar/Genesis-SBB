import { ExtensionId } from '../identity/extension-id.js';

export interface CertificationProfile {
  readonly profileId: string;
  readonly extensionId: ExtensionId;
  readonly certificationLevelCode: 'NONE' | 'SANDBOX_CLEARED' | 'ENTERPRISE_CERTIFIED' | 'MISSION_CRITICAL';
  readonly securityCompliancePassed: boolean;
  readonly staticAnalysisScoreRating: number; // e.g. 0.0 - 100.0
  readonly testCoveragePercentageValue: number; // e.g. 0.0 - 100.0
  readonly certifiedByParticipantId?: string;
  readonly certifiedAt?: Date;
}
