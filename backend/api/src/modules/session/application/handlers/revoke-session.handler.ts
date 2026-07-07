import { Injectable, Inject } from '@nestjs/common';
import { RevokeSessionCommand } from '../commands/revoke-session.command.js';
import { ISessionRepository } from '../../domain/repositories/session-repository.interface.js';
import { SessionId } from '../../domain/value-objects/session-id.value-object.js';
import { SessionNotFoundException } from '../../domain/exceptions/session-not-found.exception.js';

@Injectable()
export class RevokeSessionHandler {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository
  ) {}

  public async handle(command: RevokeSessionCommand): Promise<void> {
    const sessionId = new SessionId(command.sessionId);
    const session = await this.sessionRepository.findById(sessionId);

    if (!session) {
      throw new SessionNotFoundException(command.sessionId);
    }

    session.revoke();
    await this.sessionRepository.save(session);
  }
}
