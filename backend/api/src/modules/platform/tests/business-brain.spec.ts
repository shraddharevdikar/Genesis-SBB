import {
  ExecutiveBrain,
  ExecutiveRole,
  ExecutiveContext,
  ExecutivePersona,
  ExecutiveMemory,
  ExecutiveState,
  ExecutiveStatus,
  DecisionRequest,
  DecisionResponse,
  CollaborationRequest,
  CollaborationResponse,
  AuthorityLevel,
  MemoryReference,
  MemoryScope,
  WorkingMemory,
  ExecutiveActivatedEvent,
  ExecutiveDecisionMadeEvent,
  ExecutiveCollaborationRequestedEvent,
  ApprovalPolicy
} from '@sbb/business-brain';

class MockWorkingMemory implements WorkingMemory {
  private storeMap = new Map<string, any>();
  public readonly recentDecisions: string[] = [];
  public readonly bufferedMessages: string[] = [];
  public activeTaskContext?: string;

  public get(key: string): any {
    return this.storeMap.get(key);
  }

  public set(key: string, value: any): void {
    this.storeMap.set(key, value);
  }

  public clear(): void {
    this.storeMap.clear();
  }
}

class MockExecutiveMemory implements ExecutiveMemory {
  public readonly workingMemory = new MockWorkingMemory();
  public readonly longTermMemory: MemoryReference[] = [];
  public readonly organizationalMemory: MemoryReference[] = [];

  public async retrieve(query: string, limit?: number): Promise<MemoryReference[]> {
    return this.longTermMemory.filter(ref => ref.tags.includes(query)).slice(0, limit);
  }

  public async store(reference: MemoryReference): Promise<void> {
    if (reference.scope === MemoryScope.ORGANIZATIONAL) {
      this.organizationalMemory.push(reference);
    } else {
      this.longTermMemory.push(reference);
    }
  }
}

class MockCEOBrain implements ExecutiveBrain {
  public readonly role = ExecutiveRole.CEO;
  public readonly persona: ExecutivePersona;
  public readonly memory = new MockExecutiveMemory();
  public readonly state: ExecutiveState;

  constructor() {
    this.persona = {
      name: 'Jane Doe',
      role: ExecutiveRole.CEO,
      communicationStyle: 'DIRECT',
      decisionPhilosophy: 'DATA_DRIVEN',
      authorityLevel: AuthorityLevel.L5_BOARD,
      kpis: ['Revenue Growth', 'Market Share'],
      objectives: [
        {
          id: 'goal-1',
          description: 'Achieve 20% growth',
          targetMetric: 'YoY Revenue Growth',
          targetValue: '20%',
          deadline: new Date('2026-12-31'),
          currentProgress: '12%',
          priority: 'CRITICAL',
        }
      ]
    };

    this.state = {
      role: ExecutiveRole.CEO,
      status: ExecutiveStatus.ACTIVE,
      activeTaskIds: ['task-101'],
      lastActiveAt: new Date(),
      version: 1,
    };
  }

  public async analyze(context: ExecutiveContext, data: Record<string, any>): Promise<Record<string, any>> {
    return {
      status: 'analyzed',
      initiator: context.initiatorRole,
      metricCount: Object.keys(data).length,
    };
  }

  public async advise(request: DecisionRequest): Promise<DecisionResponse> {
    return {
      requestId: request.id,
      approvedOption: request.options[0] || 'DEFAULT',
      reasoningText: 'Approved option based on data',
      approvedBy: this.persona.name,
      approvedAuthorityLevel: this.persona.authorityLevel,
      impactAssessment: {
        financialUSD: 50000,
        timelineDays: 14,
        riskLevel: 'LOW',
        affectedDepartments: ['Engineering', 'Finance'],
      },
      approvedAt: new Date(),
      escalationsRequired: [],
    };
  }

  public async collaborate(request: CollaborationRequest): Promise<CollaborationResponse> {
    return {
      requestId: request.requestId,
      collaborator: this.role,
      isAgreed: true,
      feedbackNotes: 'Proposal looks excellent, proceed.',
      timestamp: new Date(),
    };
  }

  public async delegate(context: ExecutiveContext, task: string, assignee: ExecutiveRole): Promise<string> {
    return `Delegated: "${task}" to ${assignee}`;
  }

  public async review(context: ExecutiveContext, artifactId: string): Promise<{ approved: boolean; comments: string[] }> {
    return {
      approved: true,
      comments: ['Artifact matches all requirements.'],
    };
  }
}

describe('Executive Brain Framework Architecture Tests (BRAIN-001)', () => {
  it('should successfully instantiate a brain and execute contracts', async () => {
    const ceo = new MockCEOBrain();

    expect(ceo.role).toBe(ExecutiveRole.CEO);
    expect(ceo.persona.name).toBe('Jane Doe');
    expect(ceo.state.status).toBe(ExecutiveStatus.ACTIVE);

    const context: ExecutiveContext = {
      tenantId: 'tenant-999',
      correlationId: 'corr-001',
      initiatorRole: ExecutiveRole.CFO,
      timestamp: new Date(),
    };

    const analysis = await ceo.analyze(context, { revenue: 1200000 });
    expect(analysis.status).toBe('analyzed');
    expect(analysis.initiator).toBe(ExecutiveRole.CFO);

    const decisionRequest: DecisionRequest = {
      id: 'dec-123',
      title: 'Strategic Resource Allocation',
      description: 'Allocate additional budget for R&D',
      context: {
        baseContext: context,
        requiredAuthorityLevel: AuthorityLevel.L4_EXECUTIVE,
        constraints: ['Must not exceed total reserve budget'],
      },
      options: ['Option A: Allocate $50k', 'Option B: Do nothing'],
      requestedBy: 'CFO',
      deadline: new Date(),
    };

    const decision = await ceo.advise(decisionRequest);
    expect(decision.requestId).toBe('dec-123');
    expect(decision.approvedOption).toContain('Option A');
    expect(decision.impactAssessment.riskLevel).toBe('LOW');

    const delegation = await ceo.delegate(context, 'Prepare budget presentation', ExecutiveRole.CFO);
    expect(delegation).toContain('Prepare budget presentation');
    expect(delegation).toContain('CFO');

    const reviewResult = await ceo.review(context, 'art-777');
    expect(reviewResult.approved).toBe(true);
  });

  it('should successfully validate existence of approval policy types and events structure', () => {
    const policy: ApprovalPolicy = {
      policyId: 'p-1',
      name: 'High Budget Approval',
      description: 'Requires L4 executive approval',
      minAuthorityLevel: AuthorityLevel.L4_EXECUTIVE,
      requiredStakeholderRoles: ['CFO', 'CEO'],
    };

    expect(policy.minAuthorityLevel).toBe(AuthorityLevel.L4_EXECUTIVE);

    const activatedEvent: ExecutiveActivatedEvent = {
      eventId: 'evt-001',
      role: ExecutiveRole.CEO,
      tenantId: 'tenant-1',
      timestamp: new Date(),
      version: 1,
    };

    expect(activatedEvent.role).toBe(ExecutiveRole.CEO);
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
