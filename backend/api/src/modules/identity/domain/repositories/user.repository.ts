import { User } from '../entities/user.entity';
import { UserId } from '../value-objects/user-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';

export interface IUserRepository {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: EmailAddress): Promise<User | null>;
  save(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
