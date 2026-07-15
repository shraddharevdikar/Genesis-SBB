import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface CustomerMemory {
  readonly referenceId: MemoryReferenceId;
  readonly customerIdHash: string; // Hashed to preserve privacy
  readonly interactionType: 'SUPPORT_TICKET' | 'BOOKING_INQUIRY' | 'FEEDBACK';
  readonly relevantStationCode?: string; // Station identifier if applicable (e.g. Zurich HB)
  readonly complianceConsentObtained: boolean; // Must be true under GDPR
  readonly interactionSummary: string;
  readonly createdAt: Date;
}
