import { Injectable, Inject } from '@nestjs/common';
import { ISessionRepository } from '../../domain/repositories/session-repository.interface.js';
import { SessionId } from '../../domain/value-objects/session-id.value-object.js';
import { Session } from '../../domain/entities/session.entity.js';

@Injectable()
export class SessionApplicationService {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository
  ) {}

  public async getSessionById(sessionId: string): Promise<Session | null> {
    return this.sessionRepository.findById(new SessionId(sessionId));
  }

  public async getActiveSessionsByUserId(userId: string): Promise<Session[]> {
    const allSessions = await this.sessionRepository.findByUserId(userId);
    return allSessions.filter((s) => !s.isExpired());
  }

  public async isSessionValid(sessionId: string): Promise<boolean> {
    try {
      const session = await this.sessionRepository.findById(new SessionId(sessionId));
      if (!session) {
        return false;
      }
      return !session.isExpired();
    } catch {
      return false;
    }
  }
}
