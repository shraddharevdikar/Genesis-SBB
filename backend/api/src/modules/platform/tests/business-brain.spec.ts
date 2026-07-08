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
  ApprovalPolicy,
  CEOBrain,
  BusinessAnalysis,
  ExecutiveSummary,
  StrategicGoal,
  StrategicGoalCategory,
  Initiative,
  PriorityFramework,
  OpportunityScore,
  DelegationPlan,
  ExecutiveCouncilRequest,
  ExecutiveConsensus,
  StrategicPolicy,
  StrategyCreatedEvent,
  DelegationIssuedEvent,
  ExecutiveCouncilRequestedEvent
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

class MockCEOBrainImpl implements CEOBrain {
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

  // --- CEO SPECIFIC CONTRACTS ---

  public async analyzeBusinessState(context: ExecutiveContext, rawDepartmentMetrics: Record<string, any>): Promise<BusinessAnalysis> {
    return {
      analysisId: 'analysis-001',
      tenantId: context.tenantId,
      timestamp: new Date(),
      SWOT: {
        strengths: ['Agile Tech Stack', 'Solid Runway'],
        weaknesses: ['Resource Constrained'],
        opportunities: ['Market Consolidation', 'AI Optimization'],
        threats: ['Macroeconomic Downturn'],
      },
      strategicContext: {
        marketPosition: 'CHALLENGER',
        macroeconomicTrend: 'EXPANSION',
        internalStrengths: ['Tech Edge'],
        internalWeaknesses: ['Scale'],
        competitiveThreats: ['Incumbents'],
      },
      financialSummary: {
        revenueYTD: rawDepartmentMetrics.revenueYTD || 5000000,
        burnRateMonthly: 150000,
        runwayMonths: 18,
        operatingMargin: 0.12,
      },
      organizationalHealthScore: 85,
    };
  }

  public async createStrategicGoals(context: ExecutiveContext, goalsInput: Partial<StrategicGoal>[]): Promise<StrategicGoal[]> {
    return goalsInput.map((g, i) => ({
      id: g.id || `goal-${i}`,
      category: g.category || StrategicGoalCategory.GROWTH,
      name: g.name || 'Unnamed Strategic Goal',
      description: g.description || 'Description of strategic goal',
      targetYear: g.targetYear || 2026,
    }));
  }

  public async prioritizeInitiatives(context: ExecutiveContext, framework: PriorityFramework, initiatives: Initiative[]): Promise<OpportunityScore[]> {
    return initiatives.map(init => ({
      opportunityId: `opp-${init.id}`,
      targetInitiativeId: init.id,
      title: init.title,
      businessImpact: init.priority === 'CRITICAL' ? 95 : 75,
      strategicAlignment: 80,
      costScore: 30,
      riskScore: 40,
      timeToValue: 80,
      overallOpportunityScore: 82.5,
      confidenceIndex: 0.9,
    }));
  }

  public async delegateWork(context: ExecutiveContext, plan: DelegationPlan): Promise<DelegationPlan> {
    return {
      ...plan,
      status: 'ISSUED',
    };
  }

  public async reviewExecutiveRecommendations(context: ExecutiveContext, recommendationId: string): Promise<{ approved: boolean; comments: string[] }> {
    return {
      approved: true,
      comments: [`Recommendation ${recommendationId} has been strategically reviewed and matches general parameters.`],
    };
  }

  public async produceExecutiveSummary(context: ExecutiveContext, analysis: BusinessAnalysis): Promise<ExecutiveSummary> {
    return {
      summaryId: 'exec-sum-101',
      tenantId: context.tenantId,
      compiledAt: new Date(),
      title: 'H1 Corporate Review',
      overviewText: 'We continue robust growth under sound macro alignment.',
      businessAnalysisReferenceId: analysis.analysisId,
      departmentSummaries: [
        {
          department: 'Engineering',
          headOfDepartment: 'CTO',
          healthStatus: 'GREEN',
          keyHighlights: ['Alpha Core Delivered'],
          criticalBlockers: [],
        }
      ],
      topStrategicPriorities: ['Hiring Acceleration', 'Runway Security'],
    };
  }

  public async conveneCouncil(context: ExecutiveContext, request: ExecutiveCouncilRequest): Promise<ExecutiveConsensus> {
    return {
      consensusId: 'consensus-505',
      councilRequestId: request.councilRequestId,
      resolvedProposalId: 'prop-111',
      totalVotesCast: request.responses.length,
      approvalCount: request.responses.filter(r => r.vote === 'APPROVE').length,
      rejectionCount: request.responses.filter(r => r.vote === 'REJECT').length,
      abstentionCount: request.responses.filter(r => r.vote === 'ABSTAIN').length,
      decisionOutcome: 'PASSED',
      dissentingOpinions: [],
      resolvedAt: new Date(),
    };
  }
}

describe('Executive Brain Framework Architecture Tests (BRAIN-001 / BRAIN-002)', () => {
  it('should successfully instantiate a brain and execute standard contracts', async () => {
    const ceo = new MockCEOBrainImpl();

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

  it('should successfully validate CEO Brain specific contract implementations', async () => {
    const ceo = new MockCEOBrainImpl();
    const context: ExecutiveContext = {
      tenantId: 'tenant-abc',
      correlationId: 'corr-555',
      initiatorRole: ExecutiveRole.CEO,
      timestamp: new Date(),
    };

    // 1. Business State Analysis
    const bizAnalysis = await ceo.analyzeBusinessState(context, { revenueYTD: 6000000 });
    expect(bizAnalysis.analysisId).toBe('analysis-001');
    expect(bizAnalysis.SWOT.strengths).toContain('Agile Tech Stack');
    expect(bizAnalysis.financialSummary?.revenueYTD).toBe(6000000);

    // 2. Strategic Goals Creation (Profitability, Innovation, etc.)
    const goals = await ceo.createStrategicGoals(context, [
      { category: StrategicGoalCategory.PROFITABILITY, name: 'Optimize Burn Rate', targetYear: 2026 },
      { category: StrategicGoalCategory.INNOVATION, name: 'NextGen AI Core', targetYear: 2027 }
    ]);
    expect(goals.length).toBe(2);
    expect(goals[0].category).toBe(StrategicGoalCategory.PROFITABILITY);
    expect(goals[1].category).toBe(StrategicGoalCategory.INNOVATION);

    // 3. Initiative Prioritization using Weighted Framework
    const framework: PriorityFramework = {
      frameworkId: 'framework-weighted',
      name: 'Executive Strategy Matrix',
      description: 'Standard M4 Scoring Criteria',
      weights: {
        businessImpactWeight: 0.3,
        strategicAlignmentWeight: 0.3,
        costWeight: 0.1,
        riskWeight: 0.1,
        timeToValueWeight: 0.2,
      },
      minScoreThreshold: 65,
    };

    const initiative: Initiative = {
      id: 'init-001',
      companyObjectiveId: 'obj-303',
      title: 'Cloud Optimization Program',
      description: 'Decrease hosting spend by 15%',
      owner: ExecutiveRole.CTO,
      priority: 'CRITICAL',
      timeline: { startDate: new Date(), endDate: new Date() },
      dependencies: [],
      successMetrics: [{ metricDescription: 'Cloud Spend', targetValue: '-15%' }],
    };

    const scores = await ceo.prioritizeInitiatives(context, framework, [initiative]);
    expect(scores.length).toBe(1);
    expect(scores[0].opportunityId).toBe('opp-init-001');
    expect(scores[0].businessImpact).toBe(95);

    // 4. Delegation Plan execution
    const plan: DelegationPlan = {
      planId: 'plan-101',
      initiativeId: 'init-001',
      title: 'H2 Infrastructure Delegation Plan',
      strategicIntent: 'Enhance Operational Excellence',
      assignments: [
        {
          assignmentId: 'assign-1',
          role: ExecutiveRole.CTO,
          targetObjectiveId: 'obj-303',
          scopeOfAuthority: ['Resource Scaling', 'Cloud Vendor Contract renegotiation'],
          deliverables: ['Cloud Cost Report'],
          keyPerformanceIndicator: 'Hosting Burn Rate'
        }
      ],
      explicitRequests: [
        {
          delegationId: 'del-req-1',
          context,
          assignee: ExecutiveRole.CTO,
          taskDescription: 'Execute initial cloud audit',
          outcomeCriteria: ['Audit documentation provided'],
          deadline: new Date(),
        }
      ],
      issuedAt: new Date(),
      status: 'DRAFT',
    };

    const delegatedPlan = await ceo.delegateWork(context, plan);
    expect(delegatedPlan.status).toBe('ISSUED');

    // 5. Review Special Recommendations
    const reviewRec = await ceo.reviewExecutiveRecommendations(context, 'rec-202');
    expect(reviewRec.approved).toBe(true);
    expect(reviewRec.comments[0]).toContain('rec-202');

    // 6. Produce Executive Summaries
    const execSummary = await ceo.produceExecutiveSummary(context, bizAnalysis);
    expect(execSummary.summaryId).toBe('exec-sum-101');
    expect(execSummary.departmentSummaries[0].department).toBe('Engineering');
    expect(execSummary.departmentSummaries[0].headOfDepartment).toBe('CTO');

    // 7. Convene Executive Council
    const councilRequest: ExecutiveCouncilRequest = {
      councilRequestId: 'council-req-404',
      context,
      title: 'Corporate Acquisition Approval',
      proposalDescription: 'Acquire Small SaaS Corp for $500k',
      agendaItems: ['Overview of finances', 'IP Audit', 'Board vote'],
      targetParticipants: [ExecutiveRole.CFO, ExecutiveRole.CTO, ExecutiveRole.COO],
      requiredQuorumCount: 3,
      responses: [
        { responder: ExecutiveRole.CFO, vote: 'APPROVE', feedbackNotes: 'Financially viable', timestamp: new Date() },
        { responder: ExecutiveRole.CTO, vote: 'APPROVE', feedbackNotes: 'Clean tech stack', timestamp: new Date() },
        { responder: ExecutiveRole.COO, vote: 'APPROVE', feedbackNotes: 'Operations fit well', timestamp: new Date() }
      ],
      deadline: new Date(),
    };

    const consensus = await ceo.conveneCouncil(context, councilRequest);
    expect(consensus.consensusId).toBe('consensus-505');
    expect(consensus.approvalCount).toBe(3);
    expect(consensus.decisionOutcome).toBe('PASSED');
  });

  it('should successfully structure and validate strategic policies and custom event subjects', () => {
    const policy: StrategicPolicy = {
      policyId: 'sp-1',
      tenantId: 'tenant-99',
      name: 'High Risk Vendor Engagement Policy',
      description: 'Requires L5 Board authorization for commitments over $250k',
      minAuthorityLevelRequired: AuthorityLevel.L5_BOARD,
      constraints: [
        { constraintId: 'sc-1', category: 'FINANCIAL_LIMIT', ruleExpression: 'budget <= 250000', severity: 'BLOCK' }
      ],
      isActive: true,
      updatedAt: new Date(),
    };

    expect(policy.minAuthorityLevelRequired).toBe(AuthorityLevel.L5_BOARD);
    expect(policy.constraints[0].severity).toBe('BLOCK');

    const strategyCreatedEvent: StrategyCreatedEvent = {
      eventId: 'sce-01',
      tenantId: 'tenant-99',
      strategicGoal: {
        id: 'goal-99',
        category: StrategicGoalCategory.RISK_REDUCTION,
        name: 'Cybersecurity Hardening',
        description: 'Upgrade perimeter defenses',
        targetYear: 2026,
      },
      timestamp: new Date(),
      version: 1,
    };

    expect(strategyCreatedEvent.strategicGoal.category).toBe(StrategicGoalCategory.RISK_REDUCTION);

    const delegationIssuedEvent: DelegationIssuedEvent = {
      eventId: 'die-01',
      tenantId: 'tenant-99',
      delegationPlan: {
        planId: 'plan-99',
        initiativeId: 'init-99',
        title: 'Cybersecurity Action Plan',
        strategicIntent: 'Enforce security compliance',
        assignments: [],
        explicitRequests: [],
        issuedAt: new Date(),
        status: 'ISSUED',
      },
      timestamp: new Date(),
    };

    expect(delegationIssuedEvent.delegationPlan.status).toBe('ISSUED');

    const councilRequestedEvent: ExecutiveCouncilRequestedEvent = {
      eventId: 'cre-01',
      tenantId: 'tenant-99',
      councilRequest: {
        councilRequestId: 'cr-99',
        context: { tenantId: 'tenant-99', correlationId: 'c-1', initiatorRole: ExecutiveRole.CEO, timestamp: new Date() },
        title: 'Emergency Board Alignment',
        proposalDescription: 'Shift roadmap to priority security patches',
        agendaItems: ['Security audit results'],
        targetParticipants: [ExecutiveRole.CTO, ExecutiveRole.CFO],
        requiredQuorumCount: 2,
        responses: [],
        deadline: new Date(),
      },
      timestamp: new Date(),
    };

    expect(councilRequestedEvent.councilRequest.title).toBe('Emergency Board Alignment');
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
