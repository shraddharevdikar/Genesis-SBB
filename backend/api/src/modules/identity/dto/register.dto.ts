export class RegisterDto {
  /**
   * User full name
   * @example 'Jane Doe'
   */
  name!: string;

  /**
   * User registration email address
   * @example 'jane.doe@sbb-platform.com'
   */
  email!: string;

  /**
   * Plaintext password
   * @example 'SecureP@ss1!'
   */
  password!: string;
}
