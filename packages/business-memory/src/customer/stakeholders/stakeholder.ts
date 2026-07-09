import { CustomerContact } from '../identity/customer-contact.js';

export type StakeholderRole = 'CHAMPION' | 'INFLUENCER' | 'DECISION_MAKER' | 'PROCUREMENT' | 'TECHNICAL_CONTACT' | 'EXECUTIVE_SPONSOR';

export type StakeholderSentiment = 'POSITIVE_PROMOTER' | 'NEUTRAL' | 'NEGATIVE_DETRACTOR' | 'UNKNOWN';

export type InfluenceLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Stakeholder {
  readonly stakeholderId: string;
  readonly contact: CustomerContact;
  readonly role: StakeholderRole;
  readonly sentiment: StakeholderSentiment;
  readonly influence: InfluenceLevel;
  readonly keyPainPoints: string[];
  readonly alignmentNotes?: string;
  readonly lastInteractionDate?: Date;
}
