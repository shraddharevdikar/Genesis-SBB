import { SharedServiceCenter } from './shared-service-center.js';

export interface ServiceProvider {
  readonly providerId: string;
  readonly baseCenterRef: SharedServiceCenter;
  readonly owningBusinessUnitId: string;
  readonly managedSlaAgreementIdsList: string[];
  readonly escalationManagerParticipantId: string;
}
