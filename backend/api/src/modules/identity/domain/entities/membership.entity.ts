import { AggregateRoot } from '@sbb/shared';
import { MembershipId } from '../value-objects/membership-id.value-object';
import { MembershipRole } from '../value-objects/membership-role.value-object';
import { MembershipCreatedEvent } from '../events/membership-created.event';
import { MembershipActivatedEvent } from '../events/membership-activated.event';
import { MembershipDeactivatedEvent } from '../events/membership-deactivated.event';

export enum MembershipStatus {
  Invited = 'Invited',
  Active = 'Active',
  Suspended = 'Suspended',
  Revoked = 'Revoked',
}

export class Membership extends AggregateRoot {
  private readonly id: MembershipId;
  private readonly userId: string;
  private readonly organizationId: string;
  private role: MembershipRole;
  private status: MembershipStatus;
  private readonly joinedAt: Date;
  private updatedAt: Date;

  constructor(
    id: MembershipId,
    userId: string,
    organizationId: string,
    role: MembershipRole,
    status: MembershipStatus,
    joinedAt: Date,
    updatedAt: Date
  ) {
    super();
    if (!userId || userId.trim() === '') {
      throw new Error('User ID is required');
    }
    if (!organizationId || organizationId.trim() === '') {
      throw new Error('Organization ID is required');
    }

    this.id = id;
    this.userId = userId;
    this.organizationId = organizationId;
    this.role = role;
    this.status = status;
    this.joinedAt = joinedAt;
    this.updatedAt = updatedAt;
  }

  public getId(): MembershipId {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getOrganizationId(): string {
    return this.organizationId;
  }

  public getRole(): MembershipRole {
    return this.role;
  }

  public getStatus(): MembershipStatus {
    return this.status;
  }

  public getJoinedAt(): Date {
    return this.joinedAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public static create(
    id: MembershipId,
    userId: string,
    organizationId: string,
    role: MembershipRole
  ): Membership {
    const membership = new Membership(
      id,
      userId,
      organizationId,
      role,
      MembershipStatus.Invited,
      new Date(),
      new Date()
    );

    membership.addDomainEvent(
      new MembershipCreatedEvent(
        id.getValue(),
        userId,
        organizationId,
        role.getValue()
      )
    );

    return membership;
  }

  public updateRole(newRole: MembershipRole): void {
    if (this.role.equals(newRole)) {
      return;
    }
    this.role = newRole;
    this.updatedAt = new Date();
  }

  public activate(): void {
    if (this.status === MembershipStatus.Active) {
      return;
    }
    this.status = MembershipStatus.Active;
    this.updatedAt = new Date();
    this.addDomainEvent(new MembershipActivatedEvent(this.id.getValue()));
  }

  public suspend(): void {
    if (this.status === MembershipStatus.Suspended) {
      return;
    }
    this.status = MembershipStatus.Suspended;
    this.updatedAt = new Date();
  }

  public revoke(): void {
    if (this.status === MembershipStatus.Revoked) {
      return;
    }
    this.status = MembershipStatus.Revoked;
    this.updatedAt = new Date();
    this.addDomainEvent(new MembershipDeactivatedEvent(this.id.getValue()));
  }
}
