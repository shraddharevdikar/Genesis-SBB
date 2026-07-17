import { ExceptionRequest } from './exception-request.js';

export interface ExceptionApproval {
  readonly approvalId: string;
  readonly associatedRequestId: ExceptionRequest;
  readonly approvedByOperatorRoleId: string;
  readonly approvalNotes: string;
  readonly isApproved: boolean;
  readonly approvedAt: Date;
  readonly actualExpirationDate: Date;
}
