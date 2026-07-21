import { LogisticsKPIs } from './logistics-kpis.js';

export interface DashboardAlertNotification {
  readonly alertId: string;
  readonly severityLevel: 'INFO' | 'WARNING_THRESHOLD' | 'CRITICAL_HAZARD';
  readonly sourceModuleCode: 'PROCUREMENT' | 'WAREHOUSING' | 'INVENTORY' | 'TRANSPORTATION' | 'DELIVERY' | 'RETURNS';
  readonly subjectText: string;
  readonly detailedDescriptionText: string;
  readonly triggeredAt: Date;
  readonly acknowledgedByStaffRoleId?: string;
}

export interface LogisticsDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g., "DSH-LOG-LIVE"
  readonly dashboardTitleString: string;
  readonly activeWarehouseIdFilterString?: string;
  readonly liveKpis: LogisticsKPIs;
  readonly pendingPurchaseOrdersCount: number;
  readonly activeInTransitShipmentsCount: number;
  readonly pendingLastMileRunsCount: number;
  readonly activeAlertsList: DashboardAlertNotification[];
  readonly lastRefreshedAt: Date;
}
