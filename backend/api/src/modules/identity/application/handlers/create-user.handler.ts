import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from '../commands/create-user.command';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserDomainService } from '../../domain/services/user-domain.service';
import { User } from '../../domain/entities/user.entity';
import { UserId } from '../../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../../domain/value-objects/email-address.value-object';
import { DisplayName } from '../../domain/value-objects/display-name.value-object';

@Injectable()
export class CreateUserHandler {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    private readonly userDomainService: UserDomainService
  ) {}

  public async handle(command: CreateUserCommand): Promise<string> {
    const email = new EmailAddress(command.email);
    const displayName = new DisplayName(command.displayName);

    // Enforce domain invariant: email uniqueness
    await this.userDomainService.assertEmailIsUnique(email);

    // Generate random / sequential UserId for mock purposes
    const idValue = 'usr_' + Math.random().toString(36).substring(2, 11);
    const userId = new UserId(idValue);

    // Create the Aggregate
    const user = User.create(userId, email, displayName);

    // Save the Aggregate
    await this.userRepository.save(user);

    return user.getId().getValue();
  }
}
