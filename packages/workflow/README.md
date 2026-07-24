# @sbb/workflow

Enterprise Workflow Engine for Genesis-SBB.

## Features
- Workflow Definitions with multi-step pipelines (Sequential, Parallel, Conditional, AI, Approvals, Delays).
- Instance management with real-time execution context, variables, and execution history logs.
- Retry policies with exponential backoff.
- Saga Compensation strategy for step rollbacks upon failure.
- Multi-tenant and RBAC safety built-in.
- Multi-strategy Approvals (Single, All, Majority, Sequential, Role-based, Delegated).
- Event-driven integration with `@sbb/event-bus` and audit logging with `@sbb/audit`.

## Quick Start
```ts
import { WorkflowModule, WorkflowService } from '@sbb/workflow';

// Inject WorkflowService in NestJS
const workflow = await workflowService.createDefinition({
  name: 'Order Fulfillment',
  trigger: { type: 'EVENT' },
  steps: [
    { id: 's1', name: 'Check Inventory', type: 'TASK', order: 1 },
    { id: 's2', name: 'Manager Approval', type: 'APPROVAL', order: 2, approvers: { requiredApprovers: ['admin'], approvalStrategy: 'SINGLE', approverType: 'USER' } }
  ]
});

const instance = await workflowService.startWorkflow(workflow.id, {
  tenantId: 'tenant-123',
  variables: { orderId: 'ord-99' }
});
```
