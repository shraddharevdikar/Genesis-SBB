import { Injectable, Inject } from '@nestjs/common';
import { AuthenticationProvider } from '../providers/authentication-provider.interface.js';
import { UnsupportedAuthenticationProviderException } from '../exceptions/unsupported-provider.exception.js';

@Injectable()
export class AuthenticationDomainService {
  private readonly providers = new Map<string, AuthenticationProvider>();

  public registerProvider(provider: AuthenticationProvider): void {
    this.providers.set(provider.getProviderName().toLowerCase(), provider);
  }

  public getProvider<T extends AuthenticationProvider>(name: string): T {
    const provider = this.providers.get(name.toLowerCase());
    if (!provider) {
      throw new UnsupportedAuthenticationProviderException(name);
    }
    return provider as T;
  }
}
