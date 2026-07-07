import { Injectable } from '@nestjs/common';
import { Policy } from '../../domain/entities/policy.entity.js';

export interface PolicyEngine {
  evaluatePolicy(policy: Policy, context: Record<string, any>): boolean;
}

@Injectable()
export class MockPolicyEngine implements PolicyEngine {
  /**
   * Mock evaluation execution.
   */
  public evaluatePolicy(policy: Policy, context: Record<string, any>): boolean {
    return true;
  }
}
