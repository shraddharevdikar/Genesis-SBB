import { Injectable } from '@nestjs/common';
import { ISessionRepository } from '../../domain/repositories/session-repository.interface.js';
import { Session } from '../../domain/entities/session.entity.js';
import { SessionId } from '../../domain/value-objects/session-id.value-object.js';

@Injectable()
export class InMemorySessionRepository implements ISessionRepository {
  private readonly storage = new Map<string, Session>();

  public async findById(id: SessionId): Promise<Session | null> {
    const session = this.storage.get(id.getValue());
    return session || null;
  }

  public async findByUserId(userId: string): Promise<Session[]> {
    const results: Session[] = [];
    for (const session of this.storage.values()) {
      if (session.getUserId() === userId) {
        results.push(session);
      }
    }
    return results;
  }

  public async save(session: Session): Promise<void> {
    this.storage.set(session.getId().getValue(), session);
  }

  public async delete(id: SessionId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
