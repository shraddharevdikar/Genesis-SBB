import { Injectable } from '@nestjs/common';
import { AuthorizationService } from '../../domain/services/authorization.service.js';
import { PolicyEvaluationService } from '../../domain/services/policy-evaluation.service.js';
import { Policy } from '../../domain/entities/policy.entity.js';

@Injectable()
export class AuthorizationApplicationService {
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly policyEvaluationService: PolicyEvaluationService
  ) {}

  public async checkPermission(userId: string, permission: string): Promise<boolean> {
    return this.authorizationService.isAuthorized(userId, permission);
  }

  public async evaluatePolicies(
    policies: Policy[],
    context: {
      resource: string;
      action: string;
      userId: string;
      attributes?: Record<string, any>;
    }
  ): Promise<boolean> {
    return this.policyEvaluationService.evaluate(policies, context);
  }
}
