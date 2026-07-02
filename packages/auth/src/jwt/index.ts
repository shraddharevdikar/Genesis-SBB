import { createHmac, timingSafeEqual } from 'crypto';
import { IJwtService } from '../interfaces/index.js';
import { JwtPayload, SignOptions, VerifyOptions } from '../types/index.js';
import { InvalidTokenError, TokenExpiredError } from '../errors/index.js';

/**
 * Robust JSON Web Token (JWT) service implementation using Node's native crypto module.
 * Implements HMAC SHA256 (HS256) signatures, expiration checking, time parsing, and claim validation.
 * Eliminates external library dependencies for security-critical environments.
 */
export class JwtService implements IJwtService {
  private base64UrlEncode(str: string | Buffer): string {
    const buf = typeof str === 'string' ? Buffer.from(str) : str;
    return buf.toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  private base64UrlDecode(str: string): string {
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    return Buffer.from(base64, 'base64').toString('utf8');
  }

  /**
   * Helper to parse string time values (e.g., '1h', '30m', '7d', '10s') to numerical seconds.
   */
  private parseTime(time: string | number): number {
    if (typeof time === 'number') {
      return time;
    }
    
    const regex = /^(\d+)([smhd])$/;
    const match = time.match(regex);
    if (!match) {
      throw new Error(`Invalid time format constraint: "${time}"`);
    }
    
    const value = parseInt(match[1], 10);
    const unit = match[2];
    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 3600;
      case 'd': return value * 86400;
      default: return value;
    }
  }

  /**
   * Signs a payload and returns an encoded HS256 JWT string.
   */
  public sign(payload: Record<string, any>, secret: string, options: SignOptions = {}): string {
    if (!secret) {
      throw new Error('JWT secret is required for signature generation');
    }

    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const iat = Math.floor(Date.now() / 1000);
    const jwtPayload: JwtPayload = { ...payload, iat };

    if (options.expiresIn) {
      const seconds = this.parseTime(options.expiresIn);
      jwtPayload.exp = iat + seconds;
    }

    if (options.notBefore) {
      const seconds = this.parseTime(options.notBefore);
      jwtPayload.nbf = iat + seconds;
    }

    if (options.audience) {
      jwtPayload.aud = options.audience;
    }

    if (options.issuer) {
      jwtPayload.iss = options.issuer;
    }

    if (options.jwtId) {
      jwtPayload.jti = options.jwtId;
    }

    if (options.subject) {
      jwtPayload.sub = options.subject;
    }

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(jwtPayload));

    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const signature = createHmac('sha256', secret)
      .update(signatureInput)
      .digest();
    
    const encodedSignature = this.base64UrlEncode(signature);

    return `${signatureInput}.${encodedSignature}`;
  }

  /**
   * Verifies the authenticity and validity of a JWT token against a secret.
   * Throws `TokenExpiredError` or `InvalidTokenError` if any claim checks fail.
   */
  public verify<T extends JwtPayload = JwtPayload>(token: string, secret: string, options: VerifyOptions = {}): T {
    if (!token) {
      throw new InvalidTokenError('JWT token is empty');
    }
    if (!secret) {
      throw new Error('JWT secret is required for verification');
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new InvalidTokenError('JWT token structure is malformed');
    }

    const [encodedHeader, encodedPayload, encodedSignature] = parts;

    // Signature verification using Timing Safe Equality
    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const expectedSignature = createHmac('sha256', secret)
      .update(signatureInput)
      .digest();
    
    const expectedEncodedSignature = this.base64UrlEncode(expectedSignature);

    const actualBuffer = Buffer.from(encodedSignature);
    const expectedBuffer = Buffer.from(expectedEncodedSignature);

    if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
      throw new InvalidTokenError('JWT signature verification failed');
    }

    // Decode and parse payload
    let payload: T;
    try {
      payload = JSON.parse(this.base64UrlDecode(encodedPayload)) as T;
    } catch {
      throw new InvalidTokenError('JWT payload is not a valid JSON structure');
    }

    const now = Math.floor(Date.now() / 1000);

    // Expiration check
    if (!options.ignoreExpiration && payload.exp !== undefined) {
      if (now >= payload.exp) {
        throw new TokenExpiredError('JWT token has expired');
      }
    }

    // Not Before check
    if (payload.nbf !== undefined && now < payload.nbf) {
      throw new InvalidTokenError('JWT token is not active yet');
    }

    // Audience verification
    if (options.audience) {
      if (!payload.aud) {
        throw new InvalidTokenError('JWT audience verification failed');
      }
      const audList = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
      const checkAudList = Array.isArray(options.audience) ? options.audience : [options.audience];
      const match = checkAudList.some(aud => audList.includes(aud));
      if (!match) {
        throw new InvalidTokenError('JWT audience verification failed');
      }
    }

    // Issuer verification
    if (options.issuer && payload.iss !== options.issuer) {
      throw new InvalidTokenError('JWT issuer verification failed');
    }

    // Subject verification
    if (options.subject && payload.sub !== options.subject) {
      throw new InvalidTokenError('JWT subject verification failed');
    }

    return payload;
  }

  /**
   * Decodes a JWT token without verifying its cryptographic signature.
   */
  public decode<T extends JwtPayload = JwtPayload>(token: string): T {
    if (!token) {
      throw new InvalidTokenError('JWT token is empty');
    }

    const parts = token.split('.');
    if (parts.length < 2) {
      throw new InvalidTokenError('JWT token structure is malformed');
    }

    const encodedPayload = parts[1];
    try {
      return JSON.parse(this.base64UrlDecode(encodedPayload)) as T;
    } catch {
      throw new InvalidTokenError('Failed to decode JWT payload context');
    }
  }
}
