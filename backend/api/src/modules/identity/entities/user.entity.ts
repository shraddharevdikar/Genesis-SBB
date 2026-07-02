export class UserEntity {
  /**
   * Unique identity identifier
   */
  id!: string;

  /**
   * Complete display name
   */
  name!: string;

  /**
   * Primary verified email address
   */
  email!: string;

  /**
   * Argon2id or Bcrypt hashed password representation
   */
  passwordHash!: string;

  /**
   * Timestamp indicating registration time
   */
  createdAt!: Date;

  /**
   * Timestamp indicating last identity profile update
   */
  updatedAt!: Date;

  /**
   * Active status flags
   */
  isActive!: boolean;

  /**
   * Enabled roles for Authorization RBAC
   */
  roles!: string[];
}
