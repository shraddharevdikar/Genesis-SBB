import { AssetLifecycleState } from '../core/operations-lifecycle.js';

export interface AssetLifecycleTransitionRecord {
  readonly recordId: string;
  readonly associatedAssetIdString: string;
  readonly previousState: AssetLifecycleState;
  readonly newState: AssetLifecycleState;
  readonly transitionTriggerDescriptionText: string;
  readonly recordedByOperatorRoleId: string;
  readonly recordedAt: Date;
}
