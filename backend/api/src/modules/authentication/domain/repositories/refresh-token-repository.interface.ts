export interface RefreshToken {
  readonly tokenId: string;
  readonly userId: string;
  readonly expiresAt: Date;
  readonly isRevoked: boolean;
}

export interface IRefreshTokenRepository {
  findById(tokenId: string): Promise<RefreshToken | null>;
  save(token: RefreshToken): Promise<void>;
  revoke(tokenId: string): Promise<void>;
}
