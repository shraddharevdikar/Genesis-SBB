export interface BoardMeeting {
  readonly meetingId: string;
  readonly uniqueMeetingCode: string; // e.g. "MTG-BOARD-2026-Q2"
  readonly scheduledStartAt: Date;
  readonly scheduledEndAt: Date;
  readonly isQuorumMetFlag: boolean;
  readonly attendingBoardMemberRoleIdsList: string[];
  readonly agendaClausesJSON: string; // List of topics covered
  readonly meetingMinutesStorageURI?: string;
  readonly status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED_MINUTES_FILED' | 'CANCELLED';
  readonly recordedAt: Date;
}
