import { QualityCheck } from '../quality/quality-check.js';
import { ManufacturingContext } from '../core/manufacturing-context.js';

export interface QualityCheckCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'QUALITY_CHECK_COMPLETED';
  readonly payload: {
    readonly qualityCheck: QualityCheck;
    readonly totalFailedTestedUnitsCount: number;
    readonly triggeredCAPAActionPlanFlag: boolean;
  };
  readonly context: ManufacturingContext;
}
