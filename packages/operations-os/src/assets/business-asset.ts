import { AssetLifecycleState } from '../core/operations-lifecycle.js';

export interface BusinessAsset {
  readonly assetId: string;
  readonly uniqueAssetCode: string; // e.g. "AST-SERVER-rack-4"
  readonly displayName: string;
  readonly serialNumberString?: string;
  readonly assetCategory: 'HARDWARE' | 'SOFTWARE_LICENSE' | 'VEHICLE' | 'PRODUCTION_LINE' | 'INTELLECTUAL_PROPERTY';
  readonly purchaseCostAmount: number;
  readonly purchaseCurrencyCode: string;
  readonly currentState: AssetLifecycleState;
  readonly lastInspectedAt?: Date;
  readonly estimatedDecommissionDate?: Date;
  readonly activeFlag: boolean;
  readonly createdAt: Date;
}
