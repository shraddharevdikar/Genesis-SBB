import { randomBytes } from 'crypto';
import { ITokenGenerator } from '../interfaces/index.js';
import { AUTH_CONSTANTS } from '../constants/index.js';

/**
 * Helper class for generating cryptographically secure random tokens, standard API keys, and session identifiers.
 */
export class TokenGenerator implements ITokenGenerator {
  /**
   * Generates a cryptographically secure hex-encoded random token.
   * Default length aligns with `AUTH_CONSTANTS.TOKEN_BYTES` configuration.
   */
  public generateRandomToken(bytes: number = AUTH_CONSTANTS.TOKEN_BYTES): string {
    return randomBytes(bytes).toString('hex');
  }

  /**
   * Generates a structured, production-ready API Key with standard prefixes.
   * Leverages Base64URL encoding to prevent URL parsing errors.
   */
  public generateApiKey(prefix: string = 'sbb_live'): string {
    const randomPart = randomBytes(24)
      .toString('base64url'); // safe characters for headers/URLs
    return `${prefix}_${randomPart}`;
  }
}
