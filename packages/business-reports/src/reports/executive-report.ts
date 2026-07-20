import { BusinessReport } from './business-report.js';

export interface ExecutiveReport extends BusinessReport {
  readonly targetedBoardResolutionCode?: string; // e.g. "RES-BOARD-2026-04"
  readonly containsForwardLookingStatements: boolean;
  readonly requiresPhysicalSignatureVerification: boolean;
  readonly boardDirectorSponsorName: string;
}
