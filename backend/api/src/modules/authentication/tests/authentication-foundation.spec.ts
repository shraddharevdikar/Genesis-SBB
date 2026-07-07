import { PasswordStrengthPolicy } from '../domain/policies/password-strength.policy.js';
import { AuthenticationDomainService } from '../domain/services/authentication-domain.service.js';
import { PasswordProvider } from '../infrastructure/providers/password.provider.js';
import { BcryptHashingService } from '../infrastructure/hashing/bcrypt-hashing.service.js';
import { JwtTokenService } from '../infrastructure/jwt/jwt-token.service.js';
import { InMemoryRefreshTokenRepository } from '../infrastructure/repositories/in-memory-refresh-token.repository.js';
import { AuthenticateUserHandler } from '../application/handlers/authenticate-user.handler.js';
import { AuthenticateUserCommand } from '../application/commands/authenticate-user.command.js';
import { InvalidCredentialsException } from '../domain/exceptions/invalid-credentials.exception.js';
import { UnsupportedAuthenticationProviderException } from '../domain/exceptions/unsupported-provider.exception.js';

describe('Authentication Service Foundation', () => {
  let hashingService: BcryptHashingService;
  let jwtTokenService: JwtTokenService;
  let tokenRepository: InMemoryRefreshTokenRepository;
  let domainService: AuthenticationDomainService;
  let passwordProvider: PasswordProvider;
  let handler: AuthenticateUserHandler;

  beforeEach(() => {
    hashingService = new BcryptHashingService();
    jwtTokenService = new JwtTokenService();
    tokenRepository = new InMemoryRefreshTokenRepository();
    domainService = new AuthenticationDomainService();
    passwordProvider = new PasswordProvider(hashingService);
    handler = new AuthenticateUserHandler(domainService);

    domainService.registerProvider(passwordProvider);
  });

  describe('Password Strength Policy', () => {
    it('should reject passwords shorter than 8 characters', () => {
      expect(PasswordStrengthPolicy.isSatisfiedBy('Short1')).toBe(false);
    });

    it('should reject passwords without numbers', () => {
      expect(PasswordStrengthPolicy.isSatisfiedBy('NoNumbersPlain')).toBe(false);
    });

    it('should reject passwords without letters', () => {
      expect(PasswordStrengthPolicy.isSatisfiedBy('1234567890')).toBe(false);
    });

    it('should accept valid passwords containing letters and numbers', () => {
      expect(PasswordStrengthPolicy.isSatisfiedBy('StrongP4ss')).toBe(true);
    });
  });

  describe('Provider Domain Registry', () => {
    it('should register and retrieve providers correctly', () => {
      const retrieved = domainService.getProvider<PasswordProvider>('password');
      expect(retrieved).toBe(passwordProvider);
      expect(retrieved.getProviderName()).toBe('password');
    });

    it('should throw an exception for unsupported providers', () => {
      expect(() => domainService.getProvider('oauth')).toThrow(
        UnsupportedAuthenticationProviderException
      );
    });
  });

  describe('Token Operations', () => {
    it('should sign and decode mock tokens successfully', async () => {
      const token = await jwtTokenService.generateToken({ sub: 'usr_abc', role: 'Staff' });
      expect(token).toBeDefined();

      const decoded = await jwtTokenService.verifyToken(token);
      expect(decoded.sub).toBe('usr_abc');
      expect(decoded.role).toBe('Staff');
    });

    it('should support tracking and revoking refresh tokens', async () => {
      const tokenId = 'tok_111';
      await tokenRepository.save({
        tokenId,
        userId: 'usr_xyz',
        expiresAt: new Date(Date.now() + 10000),
        isRevoked: false,
      });

      const retrieved = await tokenRepository.findById(tokenId);
      expect(retrieved).not.toBeNull();
      expect(retrieved!.isRevoked).toBe(false);

      await tokenRepository.revoke(tokenId);
      const revoked = await tokenRepository.findById(tokenId);
      expect(revoked!.isRevoked).toBe(true);
    });
  });

  describe('Authenticate User Command Handler', () => {
    it('should successfully authenticate user with correct credentials', async () => {
      const command = new AuthenticateUserCommand('admin', 'password123');
      const result = await handler.handle(command);

      expect(result.userId).toBe('usr_admin');
      expect(result.metadata?.role).toBe('Administrator');
    });

    it('should throw InvalidCredentialsException with wrong credentials', async () => {
      const command = new AuthenticateUserCommand('admin', 'wrong_pass');
      await expect(handler.handle(command)).rejects.toThrow(
        InvalidCredentialsException
      );
    });
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
