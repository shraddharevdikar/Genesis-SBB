import { Promotion } from '../pricing/promotion.js';
import { RetailContext } from '../core/retail-context.js';

export interface PromotionLaunchedEvent {
  readonly eventId: string;
  readonly eventName: 'PROMOTION_LAUNCHED';
  readonly payload: {
    readonly promotion: Promotion;
  };
  readonly context: RetailContext;
}
