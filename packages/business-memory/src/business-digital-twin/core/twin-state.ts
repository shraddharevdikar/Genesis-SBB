import { OrganizationState } from '../organization/organization-state.js';
import { CustomerState } from '../customers/customer-state.js';
import { ProductState } from '../products/product-state.js';
import { FinancialState } from '../finance/financial-state.js';
import { OperationalState } from '../operations/operational-state.js';
import { TechnologyState } from '../technology/technology-state.js';
import { WorkforceState } from '../workforce/workforce-state.js';
import { InitiativeState } from '../strategy/initiative-state.js';
import { RiskState } from '../risks/risk-state.js';
import { BusinessHealthIndex } from '../health/business-health-index.js';

export interface TwinState {
  readonly tenantId: string;
  readonly timestamp: Date;
  readonly organization: OrganizationState;
  readonly customers: CustomerState;
  readonly products: ProductState;
  readonly finance: FinancialState;
  readonly operations: OperationalState;
  readonly technology: TechnologyState;
  readonly workforce: WorkforceState;
  readonly strategy: InitiativeState;
  readonly risks: RiskState;
  readonly overallHealth: BusinessHealthIndex;
}
