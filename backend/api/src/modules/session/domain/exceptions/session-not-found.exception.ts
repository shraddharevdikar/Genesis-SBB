export class SessionNotFoundException extends Error {
  constructor(sessionId: string) {
    super(`Session with ID '${sessionId}' was not found.`);
    this.name = 'SessionNotFoundException';
  }
}
