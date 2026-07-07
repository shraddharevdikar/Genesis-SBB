export class CreateSessionCommand {
  constructor(
    public readonly sessionId: string,
    public readonly userId: string,
    public readonly tenantId: string,
    public readonly deviceId: string,
    public readonly authenticationProvider: string,
    public readonly durationMs: number = 86400000 // 24 hours default
  ) {}
}
