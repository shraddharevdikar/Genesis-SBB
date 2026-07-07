import { EventMetadata } from '@sbb/shared';

export interface AuthenticationResult {
  readonly success: boolean;
  readonly userId?: string;
  readonly error?: string;
  readonly metadata?: Record<string, any>;
}

export interface AuthenticationProvider {
  getProviderName(): string;
}

export interface PasswordAuthenticationProvider extends AuthenticationProvider {
  authenticateWithPassword(username: string, passwordPlain: string): Promise<AuthenticationResult>;
}

export interface OAuthAuthenticationProvider extends AuthenticationProvider {
  authenticateWithOAuth(provider: string, code: string): Promise<AuthenticationResult>;
}

export interface PasskeyAuthenticationProvider extends AuthenticationProvider {
  authenticateWithPasskey(credentialId: string, challenge: string): Promise<AuthenticationResult>;
}
