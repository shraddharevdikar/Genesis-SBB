import { ProcessStageId } from '../identity/process-stage-id.js';
import { InputRequirement } from '../inputs/input-requirement.js';
import { OutcomeDefinition } from '../outputs/outcome-definition.js';
import { BusinessRule } from '../rules/business-rule.js';
import { DecisionPoint } from '../rules/decision-point.js';
import { ValidationRule } from '../rules/validation-rule.js';

export interface ProcessStage {
  readonly stageId: ProcessStageId;
  readonly sequenceIndex: number;
  readonly name: string;
  readonly functionalPurposeCode: string; // e.g. "LEGAL_REVIEW", "KYC_VERIFICATION"
  readonly inputRequirementsList: InputRequirement[];
  readonly outcomeDefinitionsList: OutcomeDefinition[];
  readonly localRulesList: BusinessRule[];
  readonly validationRulesList: ValidationRule[];
  readonly decisionPointsList: DecisionPoint[];
}
