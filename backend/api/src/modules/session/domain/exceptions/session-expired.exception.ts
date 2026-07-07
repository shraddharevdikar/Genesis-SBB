export class SessionExpiredException extends Error {
  constructor(sessionId: string) {
    super(`Session with ID '${sessionId}' has expired.`);
    this.name = 'SessionExpiredException';
  }
}
