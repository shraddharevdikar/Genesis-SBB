import assert from 'node:assert';
import { test, describe } from 'node:test';
import { ApprovalService } from './approval.service.js';
import { APPROVAL_STATUS, APPROVAL_STRATEGY } from './constants/workflow.constants.js';

describe('ApprovalService Strategy Evaluation', () => {
  const approvalService = new ApprovalService(null as any);

  test('SINGLE strategy should approve on 1 positive vote', () => {
    const votes = [{ approverId: 'u1', decision: 'APPROVED' as const, timestamp: new Date() }];
    const status = approvalService.evaluateStrategy(APPROVAL_STRATEGY.SINGLE, ['u1', 'u2'], votes);
    assert.strictEqual(status, APPROVAL_STATUS.APPROVED);
  });

  test('ALL strategy should approve only when all required approvers vote APPROVED', () => {
    const required = ['u1', 'u2'];
    const votes1 = [{ approverId: 'u1', decision: 'APPROVED' as const, timestamp: new Date() }];
    assert.strictEqual(
      approvalService.evaluateStrategy(APPROVAL_STRATEGY.ALL, required, votes1),
      APPROVAL_STATUS.PENDING
    );

    const votes2 = [
      { approverId: 'u1', decision: 'APPROVED' as const, timestamp: new Date() },
      { approverId: 'u2', decision: 'APPROVED' as const, timestamp: new Date() },
    ];
    assert.strictEqual(
      approvalService.evaluateStrategy(APPROVAL_STRATEGY.ALL, required, votes2),
      APPROVAL_STATUS.APPROVED
    );
  });

  test('MAJORITY strategy should approve when > 50% vote APPROVED', () => {
    const required = ['u1', 'u2', 'u3'];
    const votes = [
      { approverId: 'u1', decision: 'APPROVED' as const, timestamp: new Date() },
      { approverId: 'u2', decision: 'APPROVED' as const, timestamp: new Date() },
    ];
    assert.strictEqual(
      approvalService.evaluateStrategy(APPROVAL_STRATEGY.MAJORITY, required, votes),
      APPROVAL_STATUS.APPROVED
    );
  });

  test('Any REJECTED vote should mark status as REJECTED immediately', () => {
    const votes = [{ approverId: 'u1', decision: 'REJECTED' as const, timestamp: new Date() }];
    const status = approvalService.evaluateStrategy(APPROVAL_STRATEGY.ALL, ['u1', 'u2'], votes);
    assert.strictEqual(status, APPROVAL_STATUS.REJECTED);
  });
});
