import { Injectable } from '@nestjs/common';
import { IdentityContext } from '../../domain/types/identity-context.types.js';

@Injectable()
export class IdentityContextService {
  /**
   * Retrieves the current active identity context.
   * Placeholder service with no active business logic in the genesis stage.
   */
  public async getContext(): Promise<IdentityContext> {
    return {
      user: {
        id: 'usr_placeholder',
        username: 'placeholder_user',
        email: 'placeholder@sbb.local',
        roles: ['guest']
      },
      tenant: {
        id: 'ten_placeholder',
        name: 'Placeholder Tenant',
        code: 'PLACEHOLDER'
      },
      correlationId: 'corr_' + Math.random().toString(36).substring(2, 11)
    };
  }
}
