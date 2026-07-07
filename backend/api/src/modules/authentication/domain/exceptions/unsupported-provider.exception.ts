export class UnsupportedAuthenticationProviderException extends Error {
  constructor(providerName: string) {
    super(`Authentication provider '${providerName}' is not supported or configured.`);
    this.name = 'UnsupportedAuthenticationProviderException';
  }
}
