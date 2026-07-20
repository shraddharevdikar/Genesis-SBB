import { AuthenticationProfile } from '../adapters/authentication-profile.js';

export interface ConnectorConfigurationProperty {
  readonly propertyKey: string;
  readonly propertyValueString: string;
  readonly isEncryptedSecret: boolean;
  readonly descriptionNotesText?: string;
}

export interface ConnectorConfiguration {
  readonly connectionBaseURL: string;
  readonly requestTimeoutMsCount: number;
  readonly retryBackoffLimitCount: number;
  readonly activeAuthenticationProfile: AuthenticationProfile;
  readonly customPropertiesList: ConnectorConfigurationProperty[];
}
