import { UserId } from '../value-objects/user-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { DisplayName } from '../value-objects/display-name.value-object';
import { UserCreatedEvent } from '../events/user-created.event';
import { UserActivatedEvent } from '../events/user-activated.event';
import { UserDeactivatedEvent } from '../events/user-deactivated.event';

export enum UserStatus {
  Pending = 'Pending',
  Active = 'Active',
  Suspended = 'Suspended',
  Disabled = 'Disabled',
}

export class User {
  private readonly id: UserId;
  private email: EmailAddress;
  private displayName: DisplayName;
  private status: UserStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: UserId,
    email: EmailAddress,
    displayName: DisplayName,
    status: UserStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.displayName = displayName;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): UserId {
    return this.id;
  }

  public getEmail(): EmailAddress {
    return this.email;
  }

  public getDisplayName(): DisplayName {
    return this.displayName;
  }

  public getStatus(): UserStatus {
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
    id: UserId,
    email: EmailAddress,
    displayName: DisplayName
  ): User {
    const user = new User(
      id,
      email,
      displayName,
      UserStatus.Pending,
      new Date(),
      new Date()
    );

    user.domainEvents.push(
      new UserCreatedEvent(id.getValue(), email.getValue(), displayName.getValue())
    );

    return user;
  }

  public activate(): void {
    if (this.status === UserStatus.Active) {
      return;
    }
    this.status = UserStatus.Active;
    this.updatedAt = new Date();
    this.domainEvents.push(new UserActivatedEvent(this.id.getValue()));
  }

  public deactivate(): void {
    if (this.status === UserStatus.Disabled) {
      return;
    }
    this.status = UserStatus.Disabled;
    this.updatedAt = new Date();
    this.domainEvents.push(new UserDeactivatedEvent(this.id.getValue()));
  }

  public suspend(): void {
    if (this.status === UserStatus.Suspended) {
      return;
    }
    this.status = UserStatus.Suspended;
    this.updatedAt = new Date();
  }

  public updateDisplayName(newDisplayName: DisplayName): void {
    this.displayName = newDisplayName;
    this.updatedAt = new Date();
  }
}
