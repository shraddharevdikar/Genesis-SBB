import { ServiceState } from './service-state.js';

export interface ProductStateSummary {
  readonly productId: string;
  readonly name: string;
  readonly stage: 'BETA' | 'GENERAL_AVAILABILITY' | 'DEPRECATED';
  readonly activeLicensingRevenueUSD: number;
  readonly totalSubscribersCount: number;
  readonly adoptionTrend: 'UPWARD' | 'STABLE' | 'DOWNWARD';
}

export interface ProductState {
  readonly productsCount: number;
  readonly servicesCount: number;
  readonly activeOfferings: ProductStateSummary[];
  readonly coreServices: ServiceState[];
}
