import { BusinessRoleId } from '@sbb/business-roles';

export interface ProcessOwner {
  readonly ownerId: string;
  readonly accountableBusinessRoleId: BusinessRoleId;
  readonly escalationContactRoleId?: BusinessRoleId;
  readonly dualSlaSignOffRequired: boolean;
}
