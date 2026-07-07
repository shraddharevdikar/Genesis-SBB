export class CreateSessionDto {
  sessionId!: string;
  userId!: string;
  tenantId!: string;
  deviceId!: string;
  authenticationProvider!: string;
  durationMs?: number;
}
