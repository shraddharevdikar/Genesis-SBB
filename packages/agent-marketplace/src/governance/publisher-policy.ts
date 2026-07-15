import { PublisherId } from '../identity/publisher-id.js';

export interface PublisherPolicy {
  readonly publisherPolicyId: string;
  readonly publisherId: PublisherId;
  readonly allowedReleaseChannelsList: string[]; // e.g. ["STABLE", "BETA", "NIGHTLY"]
  readonly requiresManualAuditForEveryMajorRelease: boolean;
  readonly maximumActiveListingsCount: number;
  readonly lastAuditPassedDate: Date;
}
