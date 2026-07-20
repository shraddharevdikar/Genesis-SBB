import { RealEstateProjectId } from '../projects/real-estate-project.js';

export interface SocietyCommitteeMember {
  readonly memberRoleIdString: string;
  readonly fullName: string;
  readonly designationTitle: 'PRESIDENT' | 'SECRETARY' | 'TREASURER' | 'COMMITTEE_MEMBER';
}

export interface CooperativeHousingSociety {
  readonly societyId: string;
  readonly uniqueSocietyCode: string; // e.g. "CHS-HEIGHTS-ZURICH"
  readonly associatedProjectId: RealEstateProjectId;
  readonly registeredSocietyName: string;
  readonly officialRegistrationNumberText: string;
  readonly committeeMembersList: SocietyCommitteeMember[];
  readonly monthlyMaintenanceSinkingFeeAmount: number;
  readonly currencyCode: string;
  readonly accumulatedSinkingFundReserveAmount: number;
  readonly formationDate: Date;
  readonly handoverFromDeveloperCompletedFlag: boolean;
  readonly handoverDate?: Date;
  readonly activeFlag: boolean;
}
