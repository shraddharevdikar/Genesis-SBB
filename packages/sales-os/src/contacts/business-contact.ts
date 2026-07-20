import { AccountId } from '../accounts/customer-account.js';
import { ContactRole } from './contact-role.js';

export interface ContactId {
  readonly value: string;
}

export interface BusinessContact {
  readonly contactId: ContactId;
  readonly uniqueContactCode: string; // e.g., "CON-003841"
  readonly parentAccountId: AccountId;
  readonly firstNameString: string;
  readonly lastNameString: string;
  readonly professionalTitleText: string; // e.g. "Vice President of Procurement"
  readonly primaryWorkEmailString: string;
  readonly directDialPhoneNumberString?: string;
  readonly linkedInProfileURL?: string;
  readonly assignedRoles: ContactRole[];
  readonly gdprMarketingConsentGrantedFlag: boolean;
  readonly lastContactedDate?: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
