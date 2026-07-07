import { Injectable, Inject } from '@nestjs/common';
import { JwtTokenService } from '../../infrastructure/jwt/jwt-token.service.js';
import { IRefreshTokenRepository } from '../../domain/repositories/refresh-token-repository.interface.js';

@Injectable()
export class AuthenticationApplicationService {
  constructor(
    private readonly jwtTokenService: JwtTokenService,
    @Inject('IRefreshTokenRepository')
    private readonly refreshTokenRepository: IRefreshTokenRepository
  ) {}

  public async generateAccessToken(userId: string, additionalClaims: Record<string, any> = {}): Promise<string> {
    return this.jwtTokenService.generateToken({
      sub: userId,
      type: 'access',
      ...additionalClaims,
      exp: Math.floor(Date.now() / 1000) + 3600 // 1 hour
    });
  }

  public async verifyAccessToken(token: string): Promise<Record<string, any>> {
    return this.jwtTokenService.verifyToken(token);
  }

  public async revokeSession(tokenId: string): Promise<void> {
    await this.refreshTokenRepository.revoke(tokenId);
  }
}
