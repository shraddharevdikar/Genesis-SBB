import { Module, OnModuleInit } from '@nestjs/common';
import { AuthenticationDomainService } from './domain/services/authentication-domain.service.js';
import { BcryptHashingService } from './infrastructure/hashing/bcrypt-hashing.service.js';
import { JwtTokenService } from './infrastructure/jwt/jwt-token.service.js';
import { PasswordProvider } from './infrastructure/providers/password.provider.js';
import { InMemoryRefreshTokenRepository } from './infrastructure/repositories/in-memory-refresh-token.repository.js';
import { AuthenticationApplicationService } from './application/services/authentication-application.service.js';
import { AuthenticateUserHandler } from './application/handlers/authenticate-user.handler.js';

@Module({
  imports: [],
  providers: [
    AuthenticationDomainService,
    BcryptHashingService,
    JwtTokenService,
    PasswordProvider,
    AuthenticationApplicationService,
    AuthenticateUserHandler,
    {
      provide: 'IRefreshTokenRepository',
      useClass: InMemoryRefreshTokenRepository,
    },
  ],
  exports: [
    AuthenticationDomainService,
    BcryptHashingService,
    JwtTokenService,
    AuthenticationApplicationService,
    AuthenticateUserHandler,
  ],
})
export class AuthenticationModule implements OnModuleInit {
  constructor(
    private readonly authenticationDomainService: AuthenticationDomainService,
    private readonly passwordProvider: PasswordProvider
  ) {}

  public onModuleInit(): void {
    // Automatically register the default password provider on initialization
    this.authenticationDomainService.registerProvider(this.passwordProvider);
  }
}
