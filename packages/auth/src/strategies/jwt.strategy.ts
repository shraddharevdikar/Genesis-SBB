import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AUTH_CONFIG } from '../constants/auth.constants.js';
import { IJwtPayload } from '../interfaces/jwt-payload.interface.js';
import { DatabaseService } from '@sbb/database';
import { IAuthenticatedUser } from '../interfaces/authenticated-user.interface.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly db: DatabaseService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AUTH_CONFIG.JWT_SECRET,
    });
  }

  /**
   * Validates the decoded JWT payload and fetches user status to enforce multi-tenant isolation.
   */
  async validate(payload: IJwtPayload): Promise<IAuthenticatedUser> {
    if (!payload.userId || !payload.tenantId || !payload.organizationId) {
      throw new UnauthorizedException('Malformed token claims');
    }

    const user = await this.db.user.findUnique({
      where: { id: payload.userId },
      include: {
        organization: true,
      },
    });

    if (!user || user.status !== 'ACTIVE' || user.tokenVersion !== payload.tokenVersion) {
      throw new UnauthorizedException('Active session not found or token revoked');
    }

    // Verify tenant-isolation matches token claims
    if (user.organization.tenantId !== payload.tenantId || user.organizationId !== payload.organizationId) {
      throw new UnauthorizedException('Multi-tenant validation failed: cross-tenant access violation');
    }

    return {
      id: user.id,
      email: user.email,
      organizationId: user.organizationId,
      tenantId: payload.tenantId,
      roles: payload.roles || [],
    };
  }
}
