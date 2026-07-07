import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../repositories/user.repository';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { DuplicateEmailException } from '../exceptions/duplicate-email.exception';

@Injectable()
export class UserDomainService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  /**
   * Asserts that a given email address is unique within the system.
   * Throws DuplicateEmailException if a user with the same email already exists.
   */
  public async assertEmailIsUnique(email: EmailAddress): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new DuplicateEmailException(email.getValue());
    }
  }
}
