import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AUTH_CONFIG } from '../constants/auth.constants.js';
import { IJwtPayload } from '../interfaces/jwt-payload.interface.js';
import { Request } from 'express';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      // Accept either standard auth header Bearer token OR body parameter 'refreshToken'
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req: Request) => {
          return req?.body?.refreshToken || null;
        }
      ]),
      ignoreExpiration: false,
      secretOrKey: AUTH_CONFIG.REFRESH_JWT_SECRET,
      passReqToCallback: true,
    });
  }

  /**
   * Validates and returns the payload context and raw refresh token string.
   */
  async validate(req: Request, payload: IJwtPayload) {
    const refreshToken = req.headers.authorization?.replace('Bearer ', '') || req.body?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing');
    }
    return {
      payload,
      refreshToken,
    };
  }
}
