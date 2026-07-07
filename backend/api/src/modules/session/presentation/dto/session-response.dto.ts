export class SessionResponseDto {
  sessionId!: string;
  userId!: string;
  tenantId!: string;
  deviceId!: string;
  authenticationProvider!: string;
  status!: string;
  createdAt!: string;
  lastAccessedAt!: string;
  expiresAt!: string;
  revokedAt?: string;
}
