import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/entities/user.entity';
import { UserId } from '../../../../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../../../../domain/value-objects/email-address.value-object';
import { UserMapper } from '../../mappers/user.mapper';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  private readonly storage = new Map<string, any>();

  constructor() {
    // Concrete repo wrapper using memory mock contracts as per ticket skeleton instructions
  }

  public async findById(id: UserId): Promise<User | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) return null;
    return UserMapper.toDomain(raw);
  }

  public async findByEmail(email: EmailAddress): Promise<User | null> {
    for (const raw of this.storage.values()) {
      if (raw.email === email.getValue()) {
        return UserMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(user: User): Promise<void> {
    const raw = UserMapper.toPersistence(user);
    this.storage.set(user.getId().getValue(), raw);
  }

  public async delete(id: UserId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
