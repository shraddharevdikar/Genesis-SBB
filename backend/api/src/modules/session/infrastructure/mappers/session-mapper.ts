import { Session } from '../../domain/entities/session.entity.js';

export class SessionMapper {
  /**
   * Transforms a Session domain entity into a standard payload/DTO structure.
   */
  public static toDto(session: Session): Record<string, any> {
    return {
      sessionId: session.getId().getValue(),
      userId: session.getUserId(),
      tenantId: session.getTenantId(),
      deviceId: session.getDeviceId().getValue(),
      authenticationProvider: session.getAuthenticationProvider(),
      status: session.getStatus(),
      createdAt: session.getCreatedAt(),
      lastAccessedAt: session.getLastAccessedAt(),
      expiresAt: session.getExpiresAt(),
      revokedAt: session.getRevokedAt(),
    };
  }
}
