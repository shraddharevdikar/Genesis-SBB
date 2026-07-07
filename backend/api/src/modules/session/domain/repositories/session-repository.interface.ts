import { Session } from '../entities/session.entity.js';
import { SessionId } from '../value-objects/session-id.value-object.js';

export interface ISessionRepository {
  findById(id: SessionId): Promise<Session | null>;
  findByUserId(userId: string): Promise<Session[]>;
  save(session: Session): Promise<void>;
  delete(id: SessionId): Promise<void>;
}
