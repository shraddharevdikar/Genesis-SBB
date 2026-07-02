import { IPasswordPolicy } from '../interfaces/index.js';
import { PasswordPolicyOptions, PasswordPolicyResult } from '../types/index.js';
import { AUTH_CONSTANTS } from '../constants/index.js';

/**
 * Enterprise Password Policy Engine.
 * Evaluates passwords against custom strength specifications, covering lengths, casing, digits, and symbols.
 */
export class PasswordPolicy implements IPasswordPolicy {
  /**
   * Validates a password against standard or custom options.
   * By default, enforces uppercase, lowercase, numeric, and special character presence with standard min/max lengths.
   */
  public validate(password: string, options: PasswordPolicyOptions = {}): PasswordPolicyResult {
    const errors: string[] = [];
    
    if (!password) {
      return {
        isValid: false,
        errors: ['Password cannot be empty'],
      };
    }

    const minLength = options.minLength ?? AUTH_CONSTANTS.PASSWORD_MIN_LENGTH;
    const maxLength = options.maxLength ?? AUTH_CONSTANTS.PASSWORD_MAX_LENGTH;

    if (password.length < minLength) {
      errors.push(`Password must be at least ${minLength} characters long`);
    }

    if (password.length > maxLength) {
      errors.push(`Password must be no more than ${maxLength} characters long`);
    }

    if (options.requireUppercase !== false) {
      if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
      }
    }

    if (options.requireLowercase !== false) {
      if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
      }
    }

    if (options.requireNumbers !== false) {
      if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
      }
    }

    if (options.requireSpecialCharacters !== false) {
      // Standard list of safe symbols and special characters
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)');
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
