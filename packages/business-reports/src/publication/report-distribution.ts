export type DistributionMediumTypeCode = 'EMAIL_SECURE_NOTIF' | 'SBB_OPERATOR_FEED' | 'EXTERNAL_REST_WEBHOOK' | 'SECURE_SFTP_PUSH';

export interface DistributionTarget {
  readonly targetId: string;
  readonly mediumType: DistributionMediumTypeCode;
  readonly destinationURI: string; // e.g. "mailto:board@sbb.ch" or "webhook://finance-portal/new-report"
  readonly requiresEncryptionWithGpgFlag: boolean;
}

export interface ReportDistribution {
  readonly distributionId: string;
  readonly targetReportIdString: string;
  readonly targetsList: DistributionTarget[];
  readonly scheduledPublishHourOfDay: number; // e.g. 8 for 08:00
  readonly isTriggeredByEventOnly: boolean;
  readonly lastDistributedAt?: Date;
}
