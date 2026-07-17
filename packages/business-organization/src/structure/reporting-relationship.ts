import { ReportingLineTypeCode } from './reporting-line.js';

export interface ReportingRelationship {
  readonly relationshipId: string;
  readonly subordinateParticipantId: string;
  readonly superiorParticipantId: string;
  readonly reportingType: ReportingLineTypeCode;
  readonly allocationPercentageValue: number; // e.g. 100 for Direct, or splits for matrix
  readonly isPrimaryLine: boolean;
  readonly effectiveFrom: Date;
  readonly effectiveTo?: Date;
}
