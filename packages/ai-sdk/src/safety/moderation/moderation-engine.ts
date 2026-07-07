import { ModerationRequest } from './moderation-request.js';
import { ModerationResult } from './moderation-result.js';
import { SafetyClassifier } from '../classification/safety-classifier.js';
import { SafetyPolicyRegistry } from '../policies/policy-registry.js';
import { PromptValidator } from '../validation/prompt-validator.js';
import { InputValidator } from '../validation/input-validator.js';
import { OutputValidator } from '../validation/output-validator.js';

export interface ModerationEngine {
  moderate(request: ModerationRequest): Promise<ModerationResult>;
}

export class DefaultModerationEngine implements ModerationEngine {
  constructor(
    private readonly policyRegistry: SafetyPolicyRegistry,
    private readonly classifier: SafetyClassifier,
    private readonly promptValidator: PromptValidator,
    private readonly inputValidator: InputValidator,
    private readonly outputValidator: OutputValidator
  ) {}

  public async moderate(request: ModerationRequest): Promise<ModerationResult> {
    // 1. Validate request syntax/constraints
    if (request.type === 'prompt') {
      const isValid = await this.promptValidator.validatePrompt(request.content);
      if (!isValid) {
        return {
          id: request.id,
          safe: false,
          scores: [],
          flaggedCategories: ['invalid_prompt'],
          summary: 'Prompt failed basic validation constraints.',
          actionTaken: 'block',
        };
      }
    } else if (request.type === 'input') {
      const isValid = await this.inputValidator.validateInput(request.content);
      if (!isValid) {
        return {
          id: request.id,
          safe: false,
          scores: [],
          flaggedCategories: ['invalid_input'],
          summary: 'Input failed basic validation constraints.',
          actionTaken: 'block',
        };
      }
    } else if (request.type === 'output') {
      const isValid = await this.outputValidator.validateOutput(request.content);
      if (!isValid) {
        return {
          id: request.id,
          safe: false,
          scores: [],
          flaggedCategories: ['invalid_output'],
          summary: 'Output failed basic validation constraints.',
          actionTaken: 'block',
        };
      }
    }

    // 2. Lookup policy
    const policy = request.customPolicy || 
                   (request.policyId ? this.policyRegistry.get(request.policyId) : undefined);

    // 3. Classify Risk using the classifier
    const classifications = await this.classifier.classify(request.content);

    const scores = classifications.map(c => ({
      category: c.category,
      score: c.score,
      flagged: policy 
        ? (policy.promptThresholds.find(t => t.category === c.category)?.maxAllowedScore ?? 1.0) < c.score
        : c.score > 0.5,
      riskLevel: c.riskLevel,
    }));

    const flaggedCategories = scores.filter(s => s.flagged).map(s => String(s.category));

    const isSafe = flaggedCategories.length === 0;

    return {
      id: request.id,
      safe: isSafe,
      scores,
      flaggedCategories,
      summary: isSafe ? 'Content passed moderation checks' : `Flagged: ${flaggedCategories.join(', ')}`,
      actionTaken: isSafe ? 'allow' : 'block',
    };
  }
}
