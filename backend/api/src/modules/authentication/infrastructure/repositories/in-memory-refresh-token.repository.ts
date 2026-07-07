import { Injectable } from '@nestjs/common';
import { IRefreshTokenRepository, RefreshToken } from '../../domain/repositories/refresh-token-repository.interface.js';

@Injectable()
export class InMemoryRefreshTokenRepository implements IRefreshTokenRepository {
  private readonly storage = new Map<string, RefreshToken>();

  public async findById(tokenId: string): Promise<RefreshToken | null> {
    const token = this.storage.get(tokenId);
    return token || null;
  }

  public async save(token: RefreshToken): Promise<void> {
    this.storage.set(token.tokenId, token);
  }

  public async revoke(tokenId: string): Promise<void> {
    const token = this.storage.get(tokenId);
    if (token) {
      const revokedToken: RefreshToken = {
        ...token,
        isRevoked: true
      };
      this.storage.set(tokenId, revokedToken);
    }
  }
}
