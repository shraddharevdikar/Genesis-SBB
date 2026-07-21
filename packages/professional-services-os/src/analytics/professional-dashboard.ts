import { ProfessionalKPIs } from './professional-kpis.js';

export interface OperationalAlertNotification {
  readonly alertId: string;
  readonly severityLevel: 'INFORMATIONAL' | 'REMEDIAL_ACTION_WARNING' | 'CRITICAL_LEGAL_RISK';
  readonly sourceModuleCode: 'CLIENTS' | 'PROJECTS' | 'RESOURCES' | 'BILLING' | 'CUSTOMER_SUCCESS';
  readonly subjectText: string;
  readonly detailedDescriptionText: string;
  readonly triggeredAt: Date;
  readonly acknowledgedByStaffRoleId?: string;
}

export interface ProfessionalDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g., "DSH-PSA-LIVE"
  readonly dashboardTitleString: string;
  readonly activePracticeAreaFilterString?: string;
  readonly liveKpis: ProfessionalKPIs;
  readonly activeEngagementsCount: number;
  readonly activeInFlightProjectsCount: number;
  readonly totalConsultantsHeadcount: number;
  readonly pendingInvoiceRequestsCount: number;
  readonly activeOperationalAlertsList: OperationalAlertNotification[];
  readonly lastRefreshedAt: Date;
}
