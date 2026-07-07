import { Injectable } from '@nestjs/common';
import { PasswordAuthenticationProvider, AuthenticationResult } from '../../domain/providers/authentication-provider.interface.js';
import { BcryptHashingService } from '../hashing/bcrypt-hashing.service.js';

@Injectable()
export class PasswordProvider implements PasswordAuthenticationProvider {
  constructor(private readonly hashingService: BcryptHashingService) {}

  public getProviderName(): string {
    return 'password';
  }

  public async authenticateWithPassword(username: string, passwordPlain: string): Promise<AuthenticationResult> {
    // Simulated credential check for mock domain/infrastructure placeholder
    if (username === 'admin' && passwordPlain === 'password123') {
      return {
        success: true,
        userId: 'usr_admin',
        metadata: { role: 'Administrator' }
      };
    }
    return {
      success: false,
      error: 'Invalid username or password'
    };
  }
}
