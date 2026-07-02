export interface JwtPayload extends Record<string, any> {
  sub?: string; // Subject
  iss?: string; // Issuer
  aud?: string | string[]; // Audience
  exp?: number; // Expiration time
  nbf?: number; // Not before time
  iat?: number; // Issued at time
  jti?: string; // JWT ID
}

export interface SignOptions {
  expiresIn?: string | number; // e.g., '1h', '30m', '7d', or duration in seconds
  notBefore?: string | number;
  audience?: string | string[];
  issuer?: string;
  jwtId?: string;
  subject?: string;
}

export interface VerifyOptions {
  audience?: string | string[];
  issuer?: string;
  subject?: string;
  ignoreExpiration?: boolean;
}

export interface PasswordPolicyOptions {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialCharacters?: boolean;
}

export interface PasswordPolicyResult {
  isValid: boolean;
  errors: string[];
}
