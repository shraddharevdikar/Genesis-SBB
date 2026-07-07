import { Identity } from '../../../domain/entities/identity-root.entity';
import { IdentityId } from '../../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../../domain/value-objects/email-address.value-object';

export class IdentityMapper {
  public static toDomain(raw: any): Identity {
    return new Identity(
      new IdentityId(raw.id),
      new EmailAddress(raw.email),
      raw.passwordHash,
      raw.isActive,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Identity): any {
    return {
      id: domain.getId().getValue(),
      email: domain.getEmail().getValue(),
      passwordHash: domain.getPasswordHash(),
      isActive: domain.getIsActive(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
