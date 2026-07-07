import { AggregateRoot } from '@sbb/shared';
import { SessionId } from '../value-objects/session-id.value-object.js';
import { DeviceId } from '../value-objects/device-id.value-object.js';
import { SessionStatus } from './session-status.enum.js';
import { SessionCreatedEvent } from '../events/session-created.event.js';
import { SessionRevokedEvent } from '../events/session-revoked.event.js';
import { SessionExpiredEvent } from '../events/session-expired.event.js';

export class Session extends AggregateRoot {
  private readonly id: SessionId;
  private readonly userId: string;
  private readonly tenantId: string;
  private readonly deviceId: DeviceId;
  private readonly authenticationProvider: string;
  private status: SessionStatus;
  private readonly createdAt: Date;
  private lastAccessedAt: Date;
  private readonly expiresAt: Date;
  private revokedAt?: Date;

  constructor(
    id: SessionId,
    userId: string,
    tenantId: string,
    deviceId: DeviceId,
    authenticationProvider: string,
    status: SessionStatus,
    createdAt: Date,
    lastAccessedAt: Date,
    expiresAt: Date,
    revokedAt?: Date
  ) {
    super();
    if (!userId || userId.trim().length === 0) {
      throw new Error('User ID is required');
    }
    if (!tenantId || tenantId.trim().length === 0) {
      throw new Error('Tenant ID is required');
    }
    if (!authenticationProvider || authenticationProvider.trim().length === 0) {
      throw new Error('Authentication Provider is required');
    }
    this.id = id;
    this.userId = userId;
    this.tenantId = tenantId;
    this.deviceId = deviceId;
    this.authenticationProvider = authenticationProvider;
    this.status = status;
    this.createdAt = createdAt;
    this.lastAccessedAt = lastAccessedAt;
    this.expiresAt = expiresAt;
    this.revokedAt = revokedAt;
  }

  public static create(
    id: SessionId,
    userId: string,
    tenantId: string,
    deviceId: DeviceId,
    authenticationProvider: string,
    durationMs: number
  ): Session {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + durationMs);

    const session = new Session(
      id,
      userId,
      tenantId,
      deviceId,
      authenticationProvider,
      SessionStatus.Active,
      now,
      now,
      expiresAt
    );

    session.addDomainEvent(
      new SessionCreatedEvent(
        id.getValue(),
        userId,
        tenantId,
        deviceId.getValue()
      )
    );

    return session;
  }

  public getId(): SessionId {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getTenantId(): string {
    return this.tenantId;
  }

  public getDeviceId(): DeviceId {
    return this.deviceId;
  }

  public getAuthenticationProvider(): string {
    return this.authenticationProvider;
  }

  public getStatus(): SessionStatus {
    return this.status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getLastAccessedAt(): Date {
    return this.lastAccessedAt;
  }

  public getExpiresAt(): Date {
    return this.expiresAt;
  }

  public getRevokedAt(): Date | undefined {
    return this.revokedAt;
  }

  public recordAccess(now: Date = new Date()): void {
    if (this.status !== SessionStatus.Active) {
      throw new Error(`Cannot record access on a session that is ${this.status}`);
    }

    if (now > this.expiresAt) {
      this.expire(now);
      throw new Error('Session has expired');
    }

    this.lastAccessedAt = now;
  }

  public revoke(now: Date = new Date()): void {
    if (this.status === SessionStatus.Revoked) {
      return;
    }
    this.status = SessionStatus.Revoked;
    this.revokedAt = now;
    this.addDomainEvent(new SessionRevokedEvent(this.id.getValue(), now));
  }

  public expire(now: Date = new Date()): void {
    if (this.status !== SessionStatus.Active) {
      return;
    }
    this.status = SessionStatus.Expired;
    this.addDomainEvent(new SessionExpiredEvent(this.id.getValue(), now));
  }

  public isExpired(now: Date = new Date()): boolean {
    if (this.status === SessionStatus.Expired) {
      return true;
    }
    if (this.status === SessionStatus.Active && now > this.expiresAt) {
      return true;
    }
    return false;
  }
}
