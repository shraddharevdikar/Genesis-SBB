import { SdkId } from '../identity/sdk-id.js';
import { SdkLifecycleState } from './sdk-lifecycle.js';

export interface SdkSession {
  readonly sessionId: string;
  readonly sdkId: SdkId;
  readonly developerId: string;
  readonly currentProjectName: string;
  readonly activeWorkspacePath: string;
  readonly state: SdkLifecycleState;
  readonly establishedAt: Date;
  readonly expiresAt: Date;
}
