export class PasswordStrengthPolicy {
  /**
   * Evaluates if a given password satisfies platform strength constraints.
   */
  public static isSatisfiedBy(password: string): boolean {
    if (!password || password.length < 8) {
      return false;
    }
    // Check for at least one number and one letter
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasLetter && hasNumber;
  }
}
