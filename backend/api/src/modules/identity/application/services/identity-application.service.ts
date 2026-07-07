import { Injectable, Inject } from '@nestjs/common';
import { IIdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { IdentityId } from '../../domain/value-objects/identity-id.value-object';

@Injectable()
export class IdentityApplicationService {
  constructor(
    @Inject('IIdentityRepository')
    private readonly identityRepository: IIdentityRepository
  ) {}

  public async getIdentityById(id: string): Promise<any> {
    const identity = await this.identityRepository.findById(new IdentityId(id));
    if (!identity) {
      return null;
    }
    return {
      id: identity.getId().getValue(),
      email: identity.getEmail().getValue(),
      isActive: identity.getIsActive(),
      createdAt: identity.getCreatedAt(),
    };
  }
}
