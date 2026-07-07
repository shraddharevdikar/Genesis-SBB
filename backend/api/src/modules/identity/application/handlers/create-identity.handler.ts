import { Inject, Injectable } from '@nestjs/common';
import { CreateIdentityCommand } from '../commands/create-identity.command';
import { IIdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { Identity } from '../../domain/entities/identity-root.entity';
import { IdentityId } from '../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../domain/value-objects/email-address.value-object';

@Injectable()
export class CreateIdentityHandler {
  constructor(
    @Inject('IIdentityRepository')
    private readonly identityRepository: IIdentityRepository
  ) {}

  public async handle(command: CreateIdentityCommand): Promise<string> {
    const idValue = Math.random().toString(36).substring(7);
    const identity = Identity.create(
      new IdentityId(idValue),
      new EmailAddress(command.email),
      command.passwordHash
    );
    await this.identityRepository.save(identity);
    return identity.getId().getValue();
  }
}
