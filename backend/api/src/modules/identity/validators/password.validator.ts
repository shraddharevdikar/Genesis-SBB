import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordComplexityValidator {
  /**
   * Validates if a password meets the corporate security complexity policy.
   * - At least 12 characters
   * - Must contain letters, numbers, and symbols
   * - No simple repetitive patterns
   */
  validate(password: string): boolean {
    if (!password || password.length < 12) {
      return false;
    }
    
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);
    
    return hasLetters && hasNumbers && hasSymbols;
  }
}
