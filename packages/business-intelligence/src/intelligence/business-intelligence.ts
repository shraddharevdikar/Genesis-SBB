import { InsightId } from '../identity/insight-id.js';
import { IntelligenceDomainCode } from './intelligence-domain.js';
import { IntelligenceModel } from './intelligence-model.js';
import { BusinessInsight } from '../insights/business-insight.js';
import { BusinessForecast } from '../forecasting/business-forecast.js';
import { BusinessRecommendation } from '../recommendations/business-recommendation.js';
import { IntelligenceVersion } from '../core/intelligence-version.js';
import { IntelligenceLifecycle } from '../core/intelligence-lifecycle.js';

export interface BusinessIntelligence {
  readonly intelligenceScopeId: string;
  readonly tenantId: string;
  readonly uniqueScopeCode: string; // e.g. "INT-SALES-ARR"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly targetDomainCode: IntelligenceDomainCode;
  readonly activeModelsList: IntelligenceModel[];
  readonly registeredInsightsList: BusinessInsight[];
  readonly activeForecastsList: BusinessForecast[];
  readonly criticalRecommendationsList: BusinessRecommendation[];
  readonly version: IntelligenceVersion;
  readonly lifecycle: IntelligenceLifecycle;
}
