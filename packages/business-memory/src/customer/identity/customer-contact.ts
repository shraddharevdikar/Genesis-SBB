export interface CustomerContact {
  readonly contactId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber?: string;
  readonly jobTitle: string;
  readonly roleCategory: 'EXECUTIVE_SPONSOR' | 'CHAMPION' | 'DECISION_MAKER' | 'INFLUENCER' | 'PROCUREMENT' | 'TECHNICAL_CONTACT' | 'OTHER';
  readonly LinkedInUrl?: string;
  readonly isPrimaryContact: boolean;
}
