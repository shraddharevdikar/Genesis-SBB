import { IdentityId } from '../value-objects/identity-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { IdentityCreatedEvent } from '../events/identity-created.event';

export class Identity {
  private readonly id: IdentityId;
  private email: EmailAddress;
  private passwordHash: string;
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: IdentityId,
    email: EmailAddress,
    passwordHash: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): IdentityId {
    return this.id;
  }

  public getEmail(): EmailAddress {
    return this.email;
  }

  public getPasswordHash(): string {
    return this.passwordHash;
  }

  public getIsActive(): boolean {
    return this.isActive;
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
    id: IdentityId,
    email: EmailAddress,
    passwordHash: string
  ): Identity {
    const identity = new Identity(
      id,
      email,
      passwordHash,
      true,
      new Date(),
      new Date()
    );

    identity.domainEvents.push(
      new IdentityCreatedEvent(id.getValue(), email.getValue())
    );

    return identity;
  }
}
