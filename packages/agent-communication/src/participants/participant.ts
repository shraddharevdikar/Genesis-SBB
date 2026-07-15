import { ParticipantRoleType } from './participant-role.js';

export interface Participant {
  readonly participantId: string;
  readonly tenantId: string;
  readonly roleType: ParticipantRoleType;
  readonly displayName: string;
  readonly routingAddressUri: string; // Internal address (e.g. sbb-agent://agt-005 or mailto://human)
  readonly complianceConsentApproved: boolean;
  readonly departmentCode?: string; // e.g. "SBB_CARGO"
  readonly joinedAt: Date;
}
