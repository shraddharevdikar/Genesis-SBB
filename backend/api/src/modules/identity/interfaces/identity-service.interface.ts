import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

export interface IIdentityService {
  /**
   * Registers a new user identity in the system.
   * @param registerDto Registration details
   */
  register(registerDto: RegisterDto): Promise<any>;

  /**
   * Authenticates user credentials and returns tokens or session details.
   * @param loginDto Login credentials
   */
  authenticate(loginDto: LoginDto): Promise<any>;

  /**
   * Invalidates active session for a given user.
   * @param userId User Identifier
   */
  invalidateSession(userId: string): Promise<void>;
}
