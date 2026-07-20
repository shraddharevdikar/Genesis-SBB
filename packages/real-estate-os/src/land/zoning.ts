import { LandParcelId } from './land-parcel.js';

export interface ZoningApproval {
  readonly zoningId: string;
  readonly uniqueZoningCode: string; // e.g. "ZON-ZURICH-RESIDENTIAL"
  readonly associatedParcelId: LandParcelId;
  readonly currentZoningClassificationString: string; // e.g. "Residential R-4"
  readonly proposedZoningClassificationString?: string;
  readonly localAuthorityNameString: string; // e.g. "Zurich Municipal Office"
  readonly filingDate: Date;
  readonly approvalDate?: Date;
  readonly status: 'PENDING_SUBMISSION' | 'UNDER_REVIEW' | 'HEARING_SCHEDULED' | 'APPROVED' | 'REJECTED';
  readonly zoningCertificateStorageURI?: string;
  readonly lastReviewedAt: Date;
}
