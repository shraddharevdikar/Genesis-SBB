import { TenantId } from '../value-objects/tenant-id.value-object';
import { TenantName } from '../value-objects/tenant-name.value-object';
import { TenantCreatedEvent } from '../events/tenant-created.event';
import { TenantUpdatedEvent } from '../events/tenant-updated.event';
import { TenantSuspendedEvent } from '../events/tenant-suspended.event';

export enum TenantStatus {
  Provisioning = 'Provisioning',
  Active = 'Active',
  Suspended = 'Suspended',
  Archived = 'Archived',
}

export class Tenant {
  private readonly id: TenantId;
  private name: TenantName;
  private status: TenantStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: TenantId,
    name: TenantName,
    status: TenantStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): TenantId {
    return this.id;
  }

  public getName(): TenantName {
    return this.name;
  }

  public getStatus(): TenantStatus {
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

  public static create(id: TenantId, name: TenantName): Tenant {
    const tenant = new Tenant(
      id,
      name,
      TenantStatus.Provisioning,
      new Date(),
      new Date()
    );

    tenant.domainEvents.push(
      new TenantCreatedEvent(id.getValue(), name.getValue())
    );

    return tenant;
  }

  public updateName(newName: TenantName): void {
    if (this.name.equals(newName)) {
      return;
    }
    this.name = newName;
    this.updatedAt = new Date();
    this.domainEvents.push(
      new TenantUpdatedEvent(this.id.getValue(), newName.getValue())
    );
  }

  public activate(): void {
    if (this.status === TenantStatus.Active) {
      return;
    }
    this.status = TenantStatus.Active;
    this.updatedAt = new Date();
  }

  public suspend(): void {
    if (this.status === TenantStatus.Suspended) {
      return;
    }
    this.status = TenantStatus.Suspended;
    this.updatedAt = new Date();
    this.domainEvents.push(new TenantSuspendedEvent(this.id.getValue()));
  }

  public archive(): void {
    if (this.status === TenantStatus.Archived) {
      return;
    }
    this.status = TenantStatus.Archived;
    this.updatedAt = new Date();
  }
}
