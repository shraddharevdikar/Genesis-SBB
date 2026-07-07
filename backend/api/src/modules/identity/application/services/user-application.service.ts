import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserId } from '../../domain/value-objects/user-id.value-object';
import { UserStatus } from '../../domain/entities/user.entity';

@Injectable()
export class UserApplicationService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  public async getUserById(id: string): Promise<any> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) {
      return null;
    }
    return {
      id: user.getId().getValue(),
      email: user.getEmail().getValue(),
      displayName: user.getDisplayName().getValue(),
      status: user.getStatus(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }

  public async activateUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    user.activate();
    await this.userRepository.save(user);
  }

  public async deactivateUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    user.deactivate();
    await this.userRepository.save(user);
  }
}
