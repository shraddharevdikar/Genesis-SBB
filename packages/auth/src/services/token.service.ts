import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '@sbb/database';
import { AUTH_CONFIG } from '../constants/auth.constants.js';
import { IJwtPayload } from '../interfaces/jwt-payload.interface.js';
import { InvalidTokenError, TokenExpiredError } from '../errors/index.js';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly db: DatabaseService
  ) {}

  /**
   * Generates a pair of access and refresh tokens for a user.
   */
  async generateTokens(user: {
    id: string;
    email: string;
    organizationId: string;
    tenantId: string;
    tokenVersion: number;
    roles: string[];
  }): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: IJwtPayload = {
      userId: user.id,
      organizationId: user.organizationId,
      tenantId: user.tenantId,
      roles: user.roles,
      tokenVersion: user.tokenVersion,
      sub: user.id,
      email: user.email,
    };

    // Sign Access Token
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: AUTH_CONFIG.JWT_SECRET,
      expiresIn: AUTH_CONFIG.JWT_EXPIRATION as any,
    });

    // Sign Refresh Token
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: AUTH_CONFIG.REFRESH_JWT_SECRET,
      expiresIn: AUTH_CONFIG.REFRESH_JWT_EXPIRATION as any,
    });

    // Save Refresh Token to DB
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    await this.db.refreshToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt,
      },
    });

    return { accessToken, refreshToken };
  }

  /**
   * Verifies an access token and returns its payload.
   */
  async verifyAccessToken(token: string): Promise<IJwtPayload> {
    try {
      return await this.jwtService.verifyAsync<IJwtPayload>(token, {
        secret: AUTH_CONFIG.JWT_SECRET,
      });
    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        throw new TokenExpiredError();
      }
      throw new InvalidTokenError();
    }
  }

  /**
   * Verifies a refresh token and returns its payload.
   */
  async verifyRefreshToken(token: string): Promise<IJwtPayload> {
    try {
      return await this.jwtService.verifyAsync<IJwtPayload>(token, {
        secret: AUTH_CONFIG.REFRESH_JWT_SECRET,
      });
    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        throw new TokenExpiredError();
      }
      throw new InvalidTokenError();
    }
  }

  /**
   * Rotates a refresh token: revokes the old one, issues a new pair, and protects against reuse attacks.
   */
  async rotateRefreshToken(oldRefreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = await this.verifyRefreshToken(oldRefreshToken);

    const storedToken = await this.db.refreshToken.findUnique({
      where: { token: oldRefreshToken },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Refresh token is unrecognized');
    }

    // Reuse Detection: If the token has already been used or is revoked, block access and revoke all tokens for this user!
    if (storedToken.isUsed || storedToken.isRevoked) {
      await this.revokeAllUserTokens(payload.userId);
      throw new UnauthorizedException('Breach detected: Refresh token has already been rotated or revoked. All active sessions invalidated.');
    }

    // Verify user's current token version matches the token's version
    const user = await this.db.user.findUnique({
      where: { id: payload.userId },
      include: {
        organization: true,
        userRoles: {
          include: { role: true },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE' || user.tokenVersion !== payload.tokenVersion) {
      throw new UnauthorizedException('User is inactive or token version has changed');
    }

    // Mark current refresh token as used
    await this.db.refreshToken.update({
      where: { id: storedToken.id },
      data: { isUsed: true },
    });

    // Issue a new token pair
    const roles = user.userRoles.map((ur) => ur.role.name);
    return this.generateTokens({
      id: user.id,
      email: user.email,
      organizationId: user.organizationId,
      tenantId: user.organization.tenantId,
      tokenVersion: user.tokenVersion,
      roles,
    });
  }

  /**
   * Revokes a specific refresh token (e.g. on logout).
   */
  async revokeRefreshToken(token: string): Promise<void> {
    const storedToken = await this.db.refreshToken.findUnique({
      where: { token },
    });
    if (storedToken) {
      await this.db.refreshToken.update({
        where: { id: storedToken.id },
        data: { isRevoked: true },
      });
    }
  }

  /**
   * Revokes all refresh tokens for a user, forcing re-login across all devices.
   */
  async revokeAllUserTokens(userId: string): Promise<void> {
    await this.db.refreshToken.updateMany({
      where: { userId, isRevoked: false },
      data: { isRevoked: true },
    });

    // Increment user's token version to invalidate any current active access tokens
    await this.db.user.update({
      where: { id: userId },
      data: {
        tokenVersion: {
          increment: 1,
        },
      },
    });
  }
}
