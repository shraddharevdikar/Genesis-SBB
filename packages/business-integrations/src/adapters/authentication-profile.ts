export type AuthenticationMethodCode =
  | 'NO_AUTHENTICATION'
  | 'BASIC_AUTH_USER_PASS'
  | 'API_KEY_HEADER'
  | 'OAUTH2_CLIENT_CREDENTIALS'
  | 'OAUTH2_AUTHORIZATION_CODE_PKCE'
  | 'MTLS_CLIENT_CERTIFICATE'
  | 'JWT_BEARER_TOKEN';

export interface AuthenticationProfile {
  readonly profileId: string;
  readonly displayName: string;
  readonly methodCode: AuthenticationMethodCode;
  readonly credentialReferenceKeysList: string[]; // references secure vault env keys (e.g. ["SF_CLIENT_SECRET"])
  readonly tokenEndpointURL?: string;
  readonly expectedScopeStringList?: string[];
  readonly isConfiguredFlag: boolean;
  readonly lastValidVerifiedAt?: Date;
}
