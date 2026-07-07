import { Identity } from '../entities/identity-root.entity';
import { IdentityId } from '../value-objects/identity-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';

export interface IIdentityRepository {
  findById(id: IdentityId): Promise<Identity | null>;
  findByEmail(email: EmailAddress): Promise<Identity | null>;
  save(identity: Identity): Promise<void>;
  delete(id: IdentityId): Promise<void>;
}
