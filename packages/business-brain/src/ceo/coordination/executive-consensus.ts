import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface DissentingOpinion {
  readonly dissenter: ExecutiveRole;
  readonly coreObjection: string;
  readonly suggestedMitigations: string[];
  readonly riskImpactEstimate?: string;
}

export interface ExecutiveConsensus {
  readonly consensusId: string;
  readonly councilRequestId: string;
  readonly resolvedProposalId: string;
  readonly totalVotesCast: number;
  readonly approvalCount: number;
  readonly rejectionCount: number;
  readonly abstentionCount: number;
  readonly decisionOutcome: 'PASSED' | 'FAILED' | 'TABLED';
  readonly dissentingOpinions: DissentingOpinion[];
  readonly consensusReconciliationSummary?: string;
  readonly resolvedAt: Date;
}
