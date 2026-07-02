import { JwtPayload, SignOptions, VerifyOptions, PasswordPolicyOptions, PasswordPolicyResult } from '../types/index.js';

export interface IPasswordHasher {
  hash(password: string): Promise<string>;
  verify(password: string, hash: string): Promise<boolean>;
}

export interface IJwtService {
  sign(payload: Record<string, any>, secret: string, options?: SignOptions): string;
  verify<T extends JwtPayload = JwtPayload>(token: string, secret: string, options?: VerifyOptions): T;
  decode<T extends JwtPayload = JwtPayload>(token: string): T;
}

export interface ITokenGenerator {
  generateRandomToken(bytes?: number): string;
  generateApiKey(prefix?: string): string;
}

export interface IPasswordPolicy {
  validate(password: string, options?: PasswordPolicyOptions): PasswordPolicyResult;
}
