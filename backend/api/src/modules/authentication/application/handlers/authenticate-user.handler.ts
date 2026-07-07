import { Injectable, Inject } from '@nestjs/common';
import { AuthenticateUserCommand } from '../commands/authenticate-user.command.js';
import { AuthenticationDomainService } from '../../domain/services/authentication-domain.service.js';
import { PasswordAuthenticationProvider } from '../../domain/providers/authentication-provider.interface.js';
import { InvalidCredentialsException } from '../../domain/exceptions/invalid-credentials.exception.js';

@Injectable()
export class AuthenticateUserHandler {
  constructor(
    private readonly authenticationDomainService: AuthenticationDomainService
  ) {}

  public async handle(command: AuthenticateUserCommand): Promise<{ userId: string; metadata?: Record<string, any> }> {
    const providerName = command.providerName || 'password';
    
    if (providerName.toLowerCase() === 'password') {
      const provider = this.authenticationDomainService.getProvider<PasswordAuthenticationProvider>(providerName);
      const result = await provider.authenticateWithPassword(command.username, command.secret);
      
      if (!result.success || !result.userId) {
        throw new InvalidCredentialsException(result.error || 'Authentication failed');
      }

      return {
        userId: result.userId,
        metadata: result.metadata
      };
    }

    throw new Error(`Unsupported authentication provider type for command handler: ${providerName}`);
  }
}
