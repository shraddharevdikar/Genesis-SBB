import { CouncilRole } from '../participants/council-role.js';

export interface CouncilDissentingOpinion {
  readonly dissenter: CouncilRole;
  readonly coreObjection: string;
  readonly suggestedMitigations: string[];
  readonly riskImpactEstimate?: string;
}
