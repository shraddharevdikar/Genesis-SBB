import { Injectable, Inject } from '@nestjs/common';
import { ISessionRepository } from '../repositories/session-repository.interface.js';
import { Session } from '../entities/session.entity.js';
import { SessionId } from '../value-objects/session-id.value-object.js';

@Injectable()
export class SessionManagementService {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository
  ) {}

  /**
   * Evaluates if a session is currently valid.
   * Placeholder placeholder service with no complex business logic.
   */
  public async validateSession(sessionId: string): Promise<boolean> {
    const session = await this.sessionRepository.findById(new SessionId(sessionId));
    if (!session) {
      return false;
    }
    return !session.isExpired();
  }
}
