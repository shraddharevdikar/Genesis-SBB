import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtTokenService {
  /**
   * Generates a dummy JWT token as per milestone M1 scope.
   */
  public async generateToken(payload: Record<string, any>): Promise<string> {
    const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = 'dummy_signature';
    return `${header}.${encodedPayload}.${signature}`;
  }

  /**
   * Decodes a dummy JWT token.
   */
  public async verifyToken(token: string): Promise<Record<string, any>> {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }
    try {
      return JSON.parse(atob(parts[1]));
    } catch {
      throw new Error('Failed to decode token payload');
    }
  }
}
