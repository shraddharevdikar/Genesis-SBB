import { FactId } from '../identity/fact-id.js';
import { FactConfidence } from './fact-confidence.js';
import { FactValidity } from './fact-validity.js';
import { EvidenceReference } from './evidence-reference.js';

export interface BusinessFact {
  readonly factId: FactId;
  readonly uniqueFactCode: string; // e.g. "FCT-FIN-CORP-VAT-7.7"
  readonly statementText: string; // e.g. "Switzerland default VAT rate is 7.7% in 2023"
  readonly confidence: FactConfidence;
  readonly validity: FactValidity;
  readonly coreEvidenceReferencesList: EvidenceReference[];
}
