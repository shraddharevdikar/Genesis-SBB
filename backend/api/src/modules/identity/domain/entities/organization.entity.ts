import { OrganizationId } from '../value-objects/organization-id.value-object';
import { OrganizationName } from '../value-objects/organization-name.value-object';
import { OrganizationCreatedEvent } from '../events/organization-created.event';
import { OrganizationUpdatedEvent } from '../events/organization-updated.event';
import { OrganizationDeactivatedEvent } from '../events/organization-deactivated.event';

export enum OrganizationStatus {
  Pending = 'Pending',
  Active = 'Active',
  Suspended = 'Suspended',
  Archived = 'Archived',
}

export class Organization {
  private readonly id: OrganizationId;
  private name: OrganizationName;
  private status: OrganizationStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: OrganizationId,
    name: OrganizationName,
    status: OrganizationStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): OrganizationId {
    return this.id;
  }

  public getName(): OrganizationName {
    return this.name;
  }

  public getStatus(): OrganizationStatus {
    return this.status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public getEvents(): any[] {
    return this.domainEvents;
  }

  public clearEvents(): void {
    this.domainEvents = [];
  }

  public static create(
    id: OrganizationId,
    name: OrganizationName
  ): Organization {
    const org = new Organization(
      id,
      name,
      OrganizationStatus.Pending,
      new Date(),
      new Date()
    );

    org.domainEvents.push(
      new OrganizationCreatedEvent(id.getValue(), name.getValue())
    );

    return org;
  }

  public updateName(newName: OrganizationName): void {
    if (this.name.equals(newName)) {
      return;
    }
    this.name = newName;
    this.updatedAt = new Date();
    this.domainEvents.push(
      new OrganizationUpdatedEvent(this.id.getValue(), newName.getValue())
    );
  }

  public activate(): void {
    if (this.status === OrganizationStatus.Active) {
      return;
    }
    this.status = OrganizationStatus.Active;
    this.updatedAt = new Date();
  }

  public suspend(): void {
    if (this.status === OrganizationStatus.Suspended) {
      return;
    }
    this.status = OrganizationStatus.Suspended;
    this.updatedAt = new Date();
  }

  public archive(): void {
    if (this.status === OrganizationStatus.Archived) {
      return;
    }
    this.status = OrganizationStatus.Archived;
    this.updatedAt = new Date();
    this.domainEvents.push(new OrganizationDeactivatedEvent(this.id.getValue()));
  }
}
