import { User, UserStatus } from '../../../domain/entities/user.entity';
import { UserId } from '../../../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../../../domain/value-objects/email-address.value-object';
import { DisplayName } from '../../../domain/value-objects/display-name.value-object';

export class UserMapper {
  public static toDomain(raw: any): User {
    return new User(
      new UserId(raw.id),
      new EmailAddress(raw.email),
      new DisplayName(raw.displayName),
      raw.status as UserStatus,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: User): any {
    return {
      id: domain.getId().getValue(),
      email: domain.getEmail().getValue(),
      displayName: domain.getDisplayName().getValue(),
      status: domain.getStatus().toString(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
