export type ClientSegmentCode = 'ENTERPRISE' | 'MID_MARKET' | 'STRATEGIC_SME' | 'NON_PROFIT_GOVT';

export interface ClientContact {
  readonly contactId: string;
  readonly firstNameString: string;
  readonly lastNameString: string;
  readonly emailAddressText: string;
  readonly phoneNumberString?: string;
  readonly jobTitleRoleString: string;
  readonly decisionMakerFlag: boolean;
}

export interface Client {
  readonly clientId: string;
  readonly uniqueClientCode: string; // e.g. "CLI-ACME-1024"
  readonly registeredLegalNameString: string;
  readonly billingAddressString: string;
  readonly industryCategoryCodeString: string; // e.g. "FINANCE", "HEALTHCARE"
  readonly primaryContactsList: ClientContact[];
  readonly assignedAccountManagerStaffRoleIdString: string; // Links to SalesOS/HROS account lead
  readonly clientSegment: ClientSegmentCode;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}
