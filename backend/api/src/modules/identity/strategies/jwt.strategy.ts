import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy {
  constructor() {
    // TODO: Configure PassportStrategy bindings and inject JwtService
  }

  async validate(payload: { sub: string; email: string; roles: string[] }): Promise<any> {
    // TODO: Load user context, verify permissions, and attach metadata to execution request
    return {
      userId: payload.sub,
      email: payload.email,
      roles: payload.roles,
    };
  }
}
