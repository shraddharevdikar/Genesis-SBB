import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { IPasswordHasher } from '../interfaces/index.js';

const scryptAsync = promisify(scrypt) as (
  password: string | Buffer,
  salt: string | Buffer,
  keylen: number,
  options: { N?: number; r?: number; p?: number; maxmem?: number }
) => Promise<Buffer>;

/**
 * Production-ready asynchronous password hasher using Node's native Scrypt algorithm.
 * Scrypt is a memory-hard key derivation function specifically designed to resist brute-force attacks.
 */
export class ScryptPasswordHasher implements IPasswordHasher {
  private static readonly KEY_LEN = 64;
  private static readonly SALT_LEN = 16;
  
  // Modern standard scrypt parameters (N=16384 cost, r=8 block size, p=1 parallelization)
  private static readonly SCRYPT_OPTIONS = { N: 16384, r: 8, p: 1 };

  /**
   * Hashes a plain-text password securely.
   * Returns a formatted string containing "salt:hexEncodedHash".
   */
  public async hash(password: string): Promise<string> {
    if (!password) {
      throw new Error('Password cannot be empty');
    }
    const salt = randomBytes(ScryptPasswordHasher.SALT_LEN).toString('hex');
    const derivedKey = (await scryptAsync(
      password,
      salt,
      ScryptPasswordHasher.KEY_LEN,
      ScryptPasswordHasher.SCRYPT_OPTIONS
    )) as Buffer;
    
    return `${salt}:${derivedKey.toString('hex')}`;
  }

  /**
   * Verifies a plain-text password against a stored hash string using constant-time comparison.
   */
  public async verify(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return false;
    }
    
    const parts = hash.split(':');
    if (parts.length !== 2) {
      return false;
    }

    const [salt, storedHex] = parts;
    const storedBuffer = Buffer.from(storedHex, 'hex');

    try {
      const derivedKey = (await scryptAsync(
        password,
        salt,
        ScryptPasswordHasher.KEY_LEN,
        ScryptPasswordHasher.SCRYPT_OPTIONS
      )) as Buffer;

      if (derivedKey.length !== storedBuffer.length) {
        return false;
      }

      return timingSafeEqual(derivedKey, storedBuffer);
    } catch {
      return false;
    }
  }
}
