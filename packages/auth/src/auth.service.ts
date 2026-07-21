import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { PasswordService } from './services/password.service.js';
import { TokenService } from './services/token.service.js';
import { RegisterDto, LoginDto, ResetPasswordDto } from './dto/index.js';
import { InvalidCredentialsError } from './errors/index.js';
import { randomBytes } from 'crypto';
import { AUTH_CONFIG } from './constants/auth.constants.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService
  ) {}

  /**
   * Registers a brand-new Tenant, Organization, Administrator Role, and Admin User within a secure transaction.
   */
  async register(dto: RegisterDto) {
    const existingUser = await this.db.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existingUser) {
      throw new BadRequestException('A user with this email address already exists');
    }

    const tenantSlug = this.slugify(dto.organizationName);

    // Ensure tenant slug is unique
    const existingTenant = await this.db.tenant.findUnique({
      where: { slug: tenantSlug },
    });

    if (existingTenant) {
      throw new BadRequestException('An organization with a similar name already exists. Please choose another name.');
    }

    const passwordHash = await this.passwordService.hashPassword(dto.password);

    // Atomically build tenant, organization, role, and administrator user using a transaction
    const result = await this.db.$transaction(async (tx) => {
      // 1. Create Tenant
      const tenant = await tx.tenant.create({
        data: {
          name: `${dto.organizationName} Tenant`,
          slug: tenantSlug,
          status: 'ACTIVE',
        },
      });

      // 2. Create Organization
      const organization = await tx.organization.create({
        data: {
          tenantId: tenant.id,
          name: dto.organizationName,
          industry: dto.industry,
          timezone: 'UTC',
          currency: 'USD',
        },
      });

      // 3. Create Admin Role
      const role = await tx.role.create({
        data: {
          organizationId: organization.id,
          name: 'Administrator',
          description: 'Full tenant administration privileges',
        },
      });

      // 4. Create Admin User
      const user = await tx.user.create({
        data: {
          organizationId: organization.id,
          email: dto.email.toLowerCase(),
          firstName: dto.firstName,
          lastName: dto.lastName,
          passwordHash,
          status: 'ACTIVE',
          tokenVersion: 1,
        },
      });

      // 5. Assign Role to User
      await tx.userRole.create({
        data: {
          userId: user.id,
          roleId: role.id,
        },
      });

      return { user, tenant, organization, role };
    });

    // Generate active session tokens
    const tokens = await this.tokenService.generateTokens({
      id: result.user.id,
      email: result.user.email,
      organizationId: result.organization.id,
      tenantId: result.tenant.id,
      tokenVersion: result.user.tokenVersion,
      roles: [result.role.name],
    });

    return {
      user: {
        id: result.user.id,
        email: result.user.email,
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        organizationId: result.user.organizationId,
        tenantId: result.tenant.id,
        roles: [result.role.name],
      },
      ...tokens,
    };
  }

  /**
   * Logs a user in with timing-safe password verification.
   */
  async login(dto: LoginDto) {
    const user = await this.db.user.findUnique({
      where: { email: dto.email.toLowerCase() },
      include: {
        organization: true,
        userRoles: {
          include: { role: true },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE' || user.deletedAt) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = await this.passwordService.verifyPassword(dto.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    const roles = user.userRoles.map((ur) => ur.role.name);

    const tokens = await this.tokenService.generateTokens({
      id: user.id,
      email: user.email,
      organizationId: user.organizationId,
      tenantId: user.organization.tenantId,
      tokenVersion: user.tokenVersion,
      roles,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        organizationId: user.organizationId,
        tenantId: user.organization.tenantId,
        roles,
      },
      ...tokens,
    };
  }

  /**
   * Securely logs out a user by revoking their refresh token.
   */
  async logout(refreshToken: string): Promise<{ success: boolean }> {
    await this.tokenService.revokeRefreshToken(refreshToken);
    return { success: true };
  }

  /**
   * Delegates token rotation / refresh requests to the TokenService.
   */
  async refresh(refreshToken: string) {
    return this.tokenService.rotateRefreshToken(refreshToken);
  }

  /**
   * Initiates the password-reset flow by generating a secure cryptographically random token.
   */
  async forgotPassword(email: string): Promise<{ success: boolean; token: string }> {
    const user = await this.db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // To prevent user enumeration attacks, always return success even if user doesn't exist
    if (!user || user.status !== 'ACTIVE' || user.deletedAt) {
      return { success: true, token: 'demo-token-for-security' };
    }

    const resetToken = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + AUTH_CONFIG.PASSWORD_RESET_EXPIRATION_MS);

    // Save reset token context securely in SystemMetadata
    await this.db.systemMetadata.upsert({
      where: { key: `pw_reset:${resetToken}` },
      update: {
        value: JSON.stringify({ userId: user.id, expiresAt: expiresAt.getTime() }),
      },
      create: {
        key: `pw_reset:${resetToken}`,
        value: JSON.stringify({ userId: user.id, expiresAt: expiresAt.getTime() }),
      },
    });

    // In a real setup, we would trigger an email. For now, we return success and the token as requested.
    return { success: true, token: resetToken };
  }

  /**
   * Validates a password reset token and changes the user's password securely.
   */
  async resetPassword(dto: ResetPasswordDto): Promise<{ success: boolean }> {
    const metadataKey = `pw_reset:${dto.token}`;
    const tokenRecord = await this.db.systemMetadata.findUnique({
      where: { key: metadataKey },
    });

    if (!tokenRecord) {
      throw new BadRequestException('Password reset token is invalid or expired');
    }

    const { userId, expiresAt } = JSON.parse(tokenRecord.value);

    if (Date.now() > expiresAt) {
      await this.db.systemMetadata.delete({ where: { key: metadataKey } }).catch(() => {});
      throw new BadRequestException('Password reset token is invalid or expired');
    }

    const passwordHash = await this.passwordService.hashPassword(dto.newPassword);

    await this.db.$transaction([
      // Update password hash and increment tokenVersion to revoke all active sessions
      this.db.user.update({
        where: { id: userId },
        data: {
          passwordHash,
          tokenVersion: { increment: 1 },
        },
      }),
      // Delete the reset token record
      this.db.systemMetadata.delete({
        where: { key: metadataKey },
      }),
    ]);

    return { success: true };
  }

  /**
   * Retrieves profile details for the authenticated user.
   */
  async getProfile(userId: string) {
    const user = await this.db.user.findUnique({
      where: { id: userId },
      include: {
        organization: {
          include: {
            tenant: true,
          },
        },
        userRoles: {
          include: { role: true },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE' || user.deletedAt) {
      throw new NotFoundException('User profile not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      organization: {
        id: user.organization.id,
        name: user.organization.name,
        industry: user.organization.industry,
      },
      tenant: {
        id: user.organization.tenant.id,
        name: user.organization.tenant.name,
        slug: user.organization.tenant.slug,
      },
      roles: user.userRoles.map((ur) => ur.role.name),
    };
  }

  /**
   * Basic slugification helper for tenant registration.
   */
  private slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  }
}
