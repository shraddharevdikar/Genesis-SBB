import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {
  /**
   * Hashes a password securely using Argon2.
   */
  async hashPassword(password: string): Promise<string> {
    if (!password) {
      throw new Error('Password cannot be empty');
    }
    // argon2.hash automatically handles salt generation and encoding
    return argon2.hash(password, {
      type: argon2.argon2id, // secure hybrid variant recommended for passwords
      memoryCost: 65536,     // 64MB
      timeCost: 3,           // 3 iterations
      parallelism: 4,        // 4 threads
    });
  }

  /**
   * Verifies a plain text password against an Argon2 hash.
   */
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return false;
    }
    try {
      return await argon2.verify(hash, password);
    } catch (error) {
      console.error('Password verification failed:', error);
      return false;
    }
  }
}
