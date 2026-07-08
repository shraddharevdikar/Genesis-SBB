import {
  AIGateway,
  ProviderRegistry,
  DefaultModelRouter,
  AITelemetry,
  InMemoryAICache,
  SafetyPolicy,
  PromptTemplate,
  PromptVersion,
  PromptRegistry,
  CostEstimator,
  ChatProvider,
  ProviderMetadata,
  ChatMessage,
  ProviderHealthStatus,
  ProviderCapability,
  ProviderResolver,
  DefaultProviderHealthMonitor,
  ProviderFactory,
  ProviderDescriptor,
  AICapability,
  TaskComplexity,
  DefaultProviderSelector,
  DefaultModelSelector,
  RoutingEngine,
  FallbackStrategy,
  SafetyPolicyRegistry,
  RiskLevel,
  SafetyCategory,
  DefaultSafetyClassifier,
  DefaultModerationEngine,
  DefaultPromptValidator,
  DefaultInputValidator,
  DefaultOutputValidator,
  DefaultAccountingEngine,
  DefaultUsageTracker,
  StreamType,
  StreamStatus,
  DefaultStreamController,
  DefaultProgressTracker,
  DefaultStreamSerializer,
  DefaultCancellationToken,
  DefaultTelemetryEngine,
  DefaultTelemetryRecorder,
  FeedbackRating,
  GeminiProvider,
  OpenAIProvider,
  AIFacade,
  GatewayHealthMonitor,
  ExecuteRequest
} from '@sbb/ai-sdk';

describe('SBB AI Gateway & Provider Registry (GEN-AI-001 & GEN-AI-002)', () => {
  // 1. Setup a Mock Provider
  class MockChatProvider implements ChatProvider {
    public readonly metadata: ProviderMetadata = {
      id: 'google-gemini',
      name: 'Google Gemini Provider',
      capabilities: ['chat', 'streaming'],
    };

    public supports(capability: string): boolean {
      return this.metadata.capabilities.includes(capability);
    }

    public async chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any> {
      return { text: '[Gateway Abstract Response for Model: gemini-1.5-flash] Hello from Gemini!' };
    }

    public async *chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any> {
      yield { text: 'Hello ' };
      yield { text: 'from ' };
      yield { text: 'Gemini!' };
    }
  }

  let providerRegistry: ProviderRegistry;
  let modelRouter: DefaultModelRouter;
  let telemetry: AITelemetry;
  let cache: InMemoryAICache;
  let gateway: AIGateway;

  const mockDescriptor: ProviderDescriptor = {
    providerId: 'google-gemini',
    name: 'Google Gemini Provider',
    version: '1.0.0',
    capabilities: [ProviderCapability.CHAT, 'streaming'],
    status: ProviderHealthStatus.HEALTHY,
    priority: 10,
    costTier: 'LOW',
    region: 'us-central1'
  };

  const mockSafetyPolicy: SafetyPolicy = {
    id: 'sbb-standard-safety',
    name: 'SBB Standard Content Safety Policy',
    promptThresholds: [{ category: 'harassment', maxAllowedScore: 0.5 }],
    outputThresholds: [{ category: 'harassment', maxAllowedScore: 0.5 }],
    blockPII: true,
  };

  beforeEach(() => {
    providerRegistry = new ProviderRegistry();
    providerRegistry.register(new MockChatProvider(), mockDescriptor);
    modelRouter = new DefaultModelRouter();
    telemetry = new AITelemetry();
    cache = new InMemoryAICache();
    gateway = new AIGateway(providerRegistry, modelRouter, telemetry, cache, mockSafetyPolicy);
  });

  describe('Provider Registry & Descriptor', () => {
    it('should register and retrieve providers correctly with descriptors', () => {
      const provider = providerRegistry.get('google-gemini');
      expect(provider).toBeDefined();
      expect(provider?.metadata.name).toBe('Google Gemini Provider');
      
      const descriptor = providerRegistry.getDescriptor('google-gemini');
      expect(descriptor).toBeDefined();
      expect(descriptor?.priority).toBe(10);
      expect(descriptor?.costTier).toBe('LOW');

      expect(providerRegistry.list().length).toBe(1);
      expect(providerRegistry.listDescriptors().length).toBe(1);
    });

    it('should remove providers correctly', () => {
      expect(providerRegistry.get('google-gemini')).toBeDefined();
      const removed = providerRegistry.remove('google-gemini');
      expect(removed).toBe(true);
      expect(providerRegistry.get('google-gemini')).toBeUndefined();
    });

    it('should lookup providers and descriptors by capability', () => {
      const chatProviders = providerRegistry.findByCapability(ProviderCapability.CHAT);
      expect(chatProviders.length).toBe(1);

      const chatDescriptors = providerRegistry.findDescriptorsByCapability(ProviderCapability.CHAT);
      expect(chatDescriptors[0].providerId).toBe('google-gemini');
    });

    it('should throw error for non-existent required provider', () => {
      expect(() => {
        providerRegistry.getRequired('unknown-provider');
      }).toThrow();
    });
  });

  describe('Provider Resolver', () => {
    it('should resolve best matched provider based on capability & priority', () => {
      const resolver = new ProviderResolver(providerRegistry);
      
      // Register another provider with higher priority
      const highPriorityProvider = new MockChatProvider();
      const highPriorityDescriptor: ProviderDescriptor = {
        providerId: 'high-priority-openai',
        name: 'OpenAI GPT Provider',
        version: '4.0.0',
        capabilities: [ProviderCapability.CHAT],
        status: ProviderHealthStatus.HEALTHY,
        priority: 20,
        costTier: 'MEDIUM',
      };
      providerRegistry.register(highPriorityProvider, highPriorityDescriptor);

      const resolved = resolver.resolve({ capability: ProviderCapability.CHAT });
      expect(resolved.providerId).toBe('high-priority-openai');
    });

    it('should ignore offline or maintenance providers during resolution', () => {
      const resolver = new ProviderResolver(providerRegistry);
      
      // Register offline provider with higher priority
      const offlineProvider = new MockChatProvider();
      const offlineDescriptor: ProviderDescriptor = {
        providerId: 'offline-claude',
        name: 'Anthropic Claude',
        version: '3.5.0',
        capabilities: [ProviderCapability.CHAT],
        status: ProviderHealthStatus.OFFLINE,
        priority: 100, // super high but offline
        costTier: 'HIGH',
      };
      providerRegistry.register(offlineProvider, offlineDescriptor);

      const resolved = resolver.resolve({ capability: ProviderCapability.CHAT });
      expect(resolved.providerId).toBe('google-gemini'); // claude skipped because offline
    });
  });

  describe('Provider Factory', () => {
    it('should register creators and construct provider instances from config', () => {
      ProviderFactory.clear();
      ProviderFactory.registerCreator('mock-provider-type', (config) => {
        return new MockChatProvider();
      });

      const instance = ProviderFactory.create({ providerId: 'mock-provider-type' });
      expect(instance).toBeDefined();
      expect(instance.metadata.id).toBe('google-gemini');
    });

    it('should throw when creating unregistered provider types', () => {
      expect(() => {
        ProviderFactory.create({ providerId: 'non-existent-type' });
      }).toThrow();
    });
  });

  describe('Provider Health Monitor', () => {
    it('should track and update health status records', async () => {
      const monitor = new DefaultProviderHealthMonitor(providerRegistry);
      const initialHealth = monitor.getHealthStatus('google-gemini');
      expect(initialHealth.status).toBe(ProviderHealthStatus.HEALTHY);

      await monitor.checkHealth('google-gemini');

      monitor.updateHealthStatus('google-gemini', {
        status: ProviderHealthStatus.DEGRADED,
        lastCheckedAt: new Date(),
        errorMessage: 'Latency spikes detected',
      });

      const updatedHealth = monitor.getHealthStatus('google-gemini');
      expect(updatedHealth.status).toBe(ProviderHealthStatus.DEGRADED);
      expect(updatedHealth.errorMessage).toBe('Latency spikes detected');
    });
  });

  describe('AI Gateway Execution', () => {
    it('should successfully execute valid prompt and return gateway abstract response', async () => {
      const response = await gateway.execute({
        id: 'req-123',
        prompt: 'How to design a reliable microservice architecture?',
        requestedProvider: 'google-gemini',
        requestedModel: 'gemini-1.5-flash',
      });

      expect(response.id).toBeDefined();
      expect(response.content).toContain('[Gateway Abstract Response for Model: gemini-1.5-flash]');
      expect(response.metadata.provider).toBe('google-gemini');
      expect(response.metadata.model).toBe('gemini-1.5-flash');
      expect(response.usage).toBeDefined();
      expect(response.usage?.totalTokens).toBeGreaterThan(0);
    });
  });

  describe('Prompt Management', () => {
    it('should register and compile prompt templates correctly', () => {
      const promptRegistry = new PromptRegistry();
      const version: PromptVersion = {
        version: '1.0.0',
        content: 'Translate the following text to {{ language }}: {{ text }}',
        createdAt: new Date(),
      };
      const template = new PromptTemplate('translator-id', 'Translator Template', version, [version]);

      promptRegistry.register(template);

      const retrieved = promptRegistry.getRequired('translator-id');
      const compiled = retrieved.compile({ language: 'German', text: 'Hello World' });

      expect(compiled).toBe('Translate the following text to German: Hello World');
    });
  });

  describe('Cost Estimator', () => {
    it('should calculate input, output, and total costs based on token usage', () => {
      const usage = {
        promptTokens: 1000,
        completionTokens: 2000,
        totalTokens: 3000,
      };

      const estimate = CostEstimator.estimate('gemini-1.5-flash', usage);
      expect(estimate.inputCost).toBe(0.000125);
      expect(estimate.outputCost).toBe(0.00075);
      expect(estimate.totalCost).toBe(0.000875);
    });
  });

  describe('Caching', () => {
    it('should return cached response for identical requests and bypass if configured', async () => {
      const req = {
        id: 'req-cached-test',
        prompt: 'Check caching mechanism',
        requestedProvider: 'google-gemini',
        requestedModel: 'gemini-1.5-flash',
      };

      const firstResponse = await gateway.execute(req);
      const secondResponse = await gateway.execute(req);

      // Verify second response comes from cache (matches first response id perfectly)
      expect(secondResponse.id).toBe(firstResponse.id);

      // Bypass cache
      const thirdResponse = await gateway.execute({ ...req, bypassCache: true });
      expect(thirdResponse.id).not.toBe(firstResponse.id);
    });
  });

  describe('Intelligent Model Router (GEN-AI-004)', () => {
    it('should correctly define capabilities and task complexities', () => {
      expect(AICapability.CHAT).toBe('chat');
      expect(AICapability.REASONING).toBe('reasoning');
      expect(TaskComplexity.LOW).toBe('low');
      expect(TaskComplexity.EXPERT).toBe('expert');
    });

    it('should support provider selection matching capability criteria', async () => {
      const descriptors = providerRegistry.listDescriptors();
      const selector = new DefaultProviderSelector(descriptors);
      const candidates = await selector.selectProviders({
        capability: ProviderCapability.CHAT,
      });

      expect(candidates.length).toBe(1);
      expect(candidates[0].providerId).toBe('google-gemini');
    });

    it('should support model selection with criteria constraints', async () => {
      const selector = new DefaultModelSelector();
      const models = await selector.selectModels('google-gemini', {
        supportsStreaming: true,
      });

      expect(models).toContain('gemini-1.5-flash');
      expect(models).toContain('gemini-1.5-pro');
    });

    it('should evaluate and create routing decisions in the routing engine', async () => {
      const selector = new DefaultProviderSelector(providerRegistry.listDescriptors());
      const modelSelector = new DefaultModelSelector();
      const mockStrategy = {
        name: 'Cost-Optimized Strategy',
        description: 'Prefers lower cost models',
        decide: async () => ({
          selectedProviderId: 'google-gemini',
          selectedModelId: 'gemini-1.5-flash',
          reason: 'Matches low cost criteria',
          confidence: 0.99,
          matchedCriteria: ['cost'],
        }),
      };

      const engine = new RoutingEngine(selector, modelSelector, mockStrategy);
      const decision = await engine.evaluate({
        id: 'test-req',
        prompt: 'test',
        requestedProvider: 'google-gemini',
      });

      expect(decision.selectedProviderId).toBe('google-gemini');
      expect(decision.selectedModelId).toBe('gemini-1.5-flash');
      expect(decision.reason).toContain('Cost-Optimized Strategy');
    });

    it('should support fallback strategy structure config', () => {
      const fallback = new FallbackStrategy({
        primaryProviderId: 'google-gemini',
        secondaryProviderId: 'openai',
        retryPolicy: {
          maxAttempts: 3,
          initialDelayMs: 200,
          backoffMultiplier: 2,
        },
      });

      expect(fallback.getPrimaryProviderId()).toBe('google-gemini');
      expect(fallback.getSecondaryProviderId()).toBe('openai');
      expect(fallback.getRetryPolicy().maxAttempts).toBe(3);
    });
  });

  describe('AI Safety & Moderation Framework (GEN-AI-005)', () => {
    it('should define risk levels and safety categories correctly', () => {
      expect(RiskLevel.CRITICAL).toBe('critical');
      expect(RiskLevel.NONE).toBe('none');
      expect(SafetyCategory.HATE).toBe('hate');
      expect(SafetyCategory.PII).toBe('pii');
    });

    it('should support registering safety policies in PolicyRegistry', () => {
      const registry = new SafetyPolicyRegistry();
      const policy: SafetyPolicy = {
        id: 'sbb-default-safety',
        name: 'SBB Standard Safety Guardrails',
        promptThresholds: [
          { category: SafetyCategory.HATE, maxAllowedScore: 0.6 },
          { category: SafetyCategory.HARASSMENT, maxAllowedScore: 0.6 },
        ],
        outputThresholds: [],
        blockPII: true,
      };

      const descriptor = {
        policyId: 'sbb-default-safety',
        name: 'SBB Standard Safety Guardrails',
        version: '1.0.0',
        owner: 'SecOps',
        team: 'AI Safety',
        enabled: true,
        policy,
      };

      registry.register(policy, descriptor);
      expect(registry.get('sbb-default-safety')).toBe(policy);
      expect(registry.getDescriptor('sbb-default-safety')?.owner).toBe('SecOps');
    });

    it('should process safety classifications and make moderation decisions', async () => {
      const registry = new SafetyPolicyRegistry();
      const mockClassifier = {
        classify: async (content: string) => [
          { category: SafetyCategory.HATE, riskLevel: RiskLevel.HIGH, confidence: 0.95, score: 0.85 }
        ]
      };

      const engine = new DefaultModerationEngine(
        registry,
        mockClassifier,
        new DefaultPromptValidator(),
        new DefaultInputValidator(),
        new DefaultOutputValidator()
      );

      const policy: SafetyPolicy = {
        id: 'sbb-default-safety',
        name: 'SBB Standard Safety Guardrails',
        promptThresholds: [
          { category: SafetyCategory.HATE, maxAllowedScore: 0.6 },
        ],
        outputThresholds: [],
        blockPII: true,
      };

      const result = await engine.moderate({
        id: 'test-mod-id',
        content: 'some content',
        type: 'input',
        customPolicy: policy,
      });

      expect(result.safe).toBe(false);
      expect(result.flaggedCategories).toContain(SafetyCategory.HATE);
      expect(result.actionTaken).toBe('block');
    });
  });

  describe('AI Cost & Token Accounting Foundation (GEN-AI-006)', () => {
    it('should correctly support TokenUsage interface definition', () => {
      const usage = {
        inputTokens: 150,
        outputTokens: 250,
        cachedTokens: 50,
        totalTokens: 450,
      };

      expect(usage.inputTokens).toBe(150);
      expect(usage.outputTokens).toBe(250);
      expect(usage.cachedTokens).toBe(50);
      expect(usage.totalTokens).toBe(450);
    });

    it('should calculate cost estimations via DefaultUsageTracker', async () => {
      const tracker = new DefaultUsageTracker();
      const record = await tracker.trackUsage(
        {
          tenantId: 'sbb-tenant',
          organizationId: 'sbb-org',
          userId: 'user-123',
          module: 'search',
          provider: 'google-gemini',
          model: 'gemini-1.5-flash',
          capability: 'chat',
          currency: 'USD',
        },
        {
          inputTokens: 1000,
          outputTokens: 2000,
          totalTokens: 3000,
        }
      );

      expect(record.recordId).toBeDefined();
      expect(record.estimatedCost).toBe((1000 * 0.000002) + (2000 * 0.000006));
      expect(record.actualCost).toBe(record.estimatedCost);
    });

    it('should record consumption and query summary report via DefaultAccountingEngine', async () => {
      const engine = new DefaultAccountingEngine();
      
      const record1 = await engine.recordUsage({
        tenantId: 'sbb-tenant',
        organizationId: 'sbb-org',
        userId: 'user-123',
        module: 'chatbot',
        provider: 'google-gemini',
        model: 'gemini-1.5-flash',
        capability: 'chat',
        estimatedCost: 0.05,
        actualCost: 0.05,
        currency: 'USD',
      });

      const record2 = await engine.recordUsage({
        tenantId: 'sbb-tenant',
        organizationId: 'sbb-org',
        userId: 'user-456',
        module: 'coder',
        provider: 'google-gemini',
        model: 'gemini-1.5-pro',
        capability: 'coding',
        estimatedCost: 0.15,
        actualCost: 0.15,
        currency: 'USD',
      });

      expect(record1.recordId).toBeDefined();
      expect(record2.recordId).toBeDefined();

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 1);

      const summary = await engine.getSummary('sbb-tenant', startDate, endDate);

      expect(summary.totalRequests).toBe(2);
      expect(summary.totalCostUSD).toBeCloseTo(0.20);
      expect(summary.providers.find(p => p.providerId === 'google-gemini')).toBeDefined();
      expect(summary.models.find(m => m.modelId === 'gemini-1.5-flash')).toBeDefined();
      expect(summary.modules.find(mo => mo.module === 'chatbot')?.totalCostUSD).toBeCloseTo(0.05);
      expect(summary.capabilities.find(c => c.capability === 'coding')?.requestCount).toBe(1);
    });
  });

  describe('AI Streaming Infrastructure (GEN-AI-007)', () => {
    it('should define stream status and stream type enums correctly', () => {
      expect(StreamStatus.CREATED).toBe('created');
      expect(StreamStatus.RUNNING).toBe('running');
      expect(StreamStatus.CANCELLED).toBe('cancelled');

      expect(StreamType.TEXT).toBe('text');
      expect(StreamType.JSON).toBe('json');
      expect(StreamType.PROGRESS).toBe('progress');
    });

    it('should manage stream lifecycle and state transitions via StreamController', async () => {
      const controller = new DefaultStreamController('test-stream-123');
      expect(controller.getStatus()).toBe(StreamStatus.CREATED);

      await controller.start();
      expect(controller.getStatus()).toBe(StreamStatus.RUNNING);

      await controller.pause();
      expect(controller.getStatus()).toBe(StreamStatus.PAUSED);

      await controller.resume();
      expect(controller.getStatus()).toBe(StreamStatus.RESUMED);

      await controller.close();
      expect(controller.getStatus()).toBe(StreamStatus.COMPLETED);
    });

    it('should support cancellation via CancellationToken', () => {
      const token = new DefaultCancellationToken();
      expect(token.isCancelled).toBe(false);

      let triggered = false;
      token.onCancel(() => {
        triggered = true;
      });

      token.cancel();
      expect(token.isCancelled).toBe(true);
      expect(triggered).toBe(true);
    });

    it('should track progress via ProgressTracker', async () => {
      const tracker = new DefaultProgressTracker();
      const event = await tracker.trackProgress('stream-456', 45, 'generating', 12);

      expect(event.streamId).toBe('stream-456');
      expect(event.percentComplete).toBe(45);
      expect(event.currentStage).toBe('generating');
      expect(event.estimatedTimeRemainingSeconds).toBe(12);
      expect(event.progressId).toBeDefined();
    });

    it('should serialize and deserialize StreamEvents via StreamSerializer', () => {
      const serializer = new DefaultStreamSerializer();
      const event = {
        eventId: 'evt-123',
        streamId: 'stream-123',
        type: 'chunk' as const,
        timestamp: new Date(),
        message: {
          id: 'msg-123',
          type: StreamType.TEXT,
          index: 0,
          content: 'Hello World',
          timestamp: new Date(),
        }
      };

      const serialized = serializer.serialize(event);
      const deserialized = serializer.deserialize(serialized);

      expect(deserialized.eventId).toBe('evt-123');
      expect(deserialized.streamId).toBe('stream-123');
      expect(deserialized.type).toBe('chunk');
      expect(deserialized.message?.content).toBe('Hello World');
    });
  });

  describe('AI Telemetry Foundation (GEN-AI-008)', () => {
    const context = {
      requestId: 'req-999',
      correlationId: 'corr-999',
      tenantId: 'sbb-tenant',
      organizationId: 'sbb-org',
      userId: 'user-111',
      sessionId: 'sess-111',
      streamId: 'stream-111',
      providerId: 'google-gemini',
      modelId: 'gemini-1.5-flash',
      promptVersion: 'v1.2',
      capability: 'translation',
    };

    it('should record telemetry events using DefaultTelemetryRecorder', () => {
      const recorder = new DefaultTelemetryRecorder();
      recorder.recordEvent('request.started', context, { customMeta: 'test' });
      recorder.recordFeedback(context, {
        feedbackId: 'fb-001',
        rating: FeedbackRating.POSITIVE,
        comments: 'Great response!',
        userId: 'user-111',
        timestamp: new Date(),
      });

      const events = recorder.getEvents();
      expect(events.length).toBe(1);
      expect(events[0].eventType).toBe('request.started');
      expect(events[0].context.tenantId).toBe('sbb-tenant');

      const feedback = recorder.getFeedback();
      expect(feedback.length).toBe(1);
      expect(feedback[0].feedback.rating).toBe(FeedbackRating.POSITIVE);
    });

    it('should log metrics using DefaultTelemetryRecorder', () => {
      const recorder = new DefaultTelemetryRecorder();
      recorder.recordMetric({
        metricId: 'm-001',
        name: 'latency_ms',
        value: 120,
        context,
        timestamp: new Date(),
      });

      const metrics = recorder.getMetrics();
      expect(metrics.length).toBe(1);
      expect(metrics[0].name).toBe('latency_ms');
      expect(metrics[0].value).toBe(120);
    });

    it('should aggregate events and generate reports in DefaultTelemetryEngine', async () => {
      const engine = new DefaultTelemetryEngine();

      await engine.recordEvent('request.started', context);
      await engine.recordEvent('request.completed', context);
      await engine.recordEvent('request.failed', context);

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 1);

      const summary = await engine.generateSummary('sbb-tenant', startDate, endDate);

      expect(summary.tenantId).toBe('sbb-tenant');
      expect(summary.totalRequests).toBe(2); // one completed + one failed
      expect(summary.successRate).toBe(0.5); // 1 out of 2 completed
    });
  });

  describe('AI Providers: Google Gemini & OpenAI (GEN-AI-009)', () => {
    it('should initialize GeminiProvider and verify metadata and capabilities', () => {
      const provider = new GeminiProvider();
      expect(provider.metadata.id).toBe('google-gemini');
      expect(provider.supports(ProviderCapability.CHAT)).toBe(true);
      expect(provider.supports(ProviderCapability.REASONING)).toBe(true);
      expect(provider.supports(ProviderCapability.EMBEDDING)).toBe(true);
      expect(provider.supports(ProviderCapability.VISION)).toBe(true);
    });

    it('should initialize OpenAIProvider and verify metadata and capabilities', () => {
      const provider = new OpenAIProvider();
      expect(provider.metadata.id).toBe('openai');
      expect(provider.supports(ProviderCapability.CHAT)).toBe(true);
      expect(provider.supports(ProviderCapability.REASONING)).toBe(true);
      expect(provider.supports(ProviderCapability.EMBEDDING)).toBe(true);
      expect(provider.supports(ProviderCapability.VISION)).toBe(true);
    });

    it('should correctly execute chat on GeminiProvider using mocked response when API key is absent', async () => {
      const provider = new GeminiProvider();
      const result = await provider.chat([{ role: 'user', content: 'What is SBB?' }]);
      expect(result.content).toContain('[Google Gemini Mock Response]');
      expect(result.usage).toBeDefined();
      expect(result.usage.totalTokens).toBeGreaterThan(0);
    });

    it('should correctly execute chat on OpenAIProvider using mocked response when API key is absent', async () => {
      const provider = new OpenAIProvider();
      const result = await provider.chat([{ role: 'user', content: 'What is SBB?' }]);
      expect(result.content).toContain('[OpenAI Mock Response]');
      expect(result.usage).toBeDefined();
      expect(result.usage.totalTokens).toBeGreaterThan(0);
    });

    it('should correctly execute reasoning on GeminiProvider using mocked response when API key is absent', async () => {
      const provider = new GeminiProvider();
      const result = await provider.reason([{ role: 'user', content: 'Prove P != NP' }]);
      expect(result.text).toContain('[Google Gemini Reasoning Mock Response]');
      expect(result.thinkingProcess).toContain('Thinking Process');
    });

    it('should correctly execute reasoning on OpenAIProvider using mocked response when API key is absent', async () => {
      const provider = new OpenAIProvider();
      const result = await provider.reason([{ role: 'user', content: 'Prove P != NP' }]);
      expect(result.text).toContain('[OpenAI Reasoning Mock Response]');
      expect(result.thinkingProcess).toContain('Thinking Process');
    });

    it('should generate embeddings from GeminiProvider', async () => {
      const provider = new GeminiProvider();
      const embeddings = await provider.embed('Hello SBB');
      expect(embeddings.length).toBe(1);
      expect(embeddings[0].length).toBe(1536);
    });

    it('should generate embeddings from OpenAIProvider', async () => {
      const provider = new OpenAIProvider();
      const embeddings = await provider.embed(['Hello', 'World']);
      expect(embeddings.length).toBe(2);
      expect(embeddings[0].length).toBe(1536);
    });

    it('should execute vision analysis on GeminiProvider', async () => {
      const provider = new GeminiProvider();
      const result = await provider.analyzeImage([{ role: 'user', content: 'Describe this image' }], [{ b64Data: 'abcd', mimeType: 'image/png' }]);
      expect(result.content).toContain('[Google Gemini Vision Mock Response]');
    });

    it('should execute vision analysis on OpenAIProvider', async () => {
      const provider = new OpenAIProvider();
      const result = await provider.analyzeImage([{ role: 'user', content: 'Describe this image' }], [{ b64Data: 'abcd', mimeType: 'image/png' }]);
      expect(result.content).toContain('[OpenAI Vision Mock Response]');
    });
  });

  describe('Unified AI Gateway API & Orchestration Pipeline (GEN-AI-010)', () => {
    let providerReg: ProviderRegistry;
    let router: DefaultModelRouter;
    let tel: AITelemetry;
    let acc: DefaultAccountingEngine;
    let gatewayFacade: AIFacade;

    const testPolicy: SafetyPolicy = {
      id: 'policy-test',
      name: 'Test Safety Policy',
      promptThresholds: [],
      outputThresholds: [],
      blockPII: false,
    };

    beforeEach(() => {
      providerReg = new ProviderRegistry();
      router = new DefaultModelRouter();
      tel = new AITelemetry();
      acc = new DefaultAccountingEngine();

      // Register mock provider
      const mockGemini = new GeminiProvider();
      providerReg.register(mockGemini, mockDescriptor);

      gatewayFacade = new AIFacade(
        providerReg,
        router,
        tel,
        acc,
        testPolicy
      );
    });

    it('should execute a unified gateway request successfully with metadata, cost, safety and telemetry', async () => {
      const request: ExecuteRequest = {
        tenantId: 'enterprise-tenant-abc',
        prompt: 'Tell me about clean architecture',
        providerId: 'google-gemini',
      };

      const response = await gatewayFacade.execute(request);

      expect(response.id).toBeDefined();
      expect(response.content).toContain('[Google Gemini Mock Response]');
      expect(response.metadata.provider).toBe('google-gemini');
      expect(response.usage.promptTokens).toBeGreaterThan(0);
      expect(response.safety.safe).toBe(true);
      expect(response.cost.estimatedCostUSD).toBeGreaterThan(0);
      expect(response.telemetry.requestId).toBeDefined();
    });

    it('should block execution when input violates safety policy rules', async () => {
      const request: ExecuteRequest = {
        tenantId: 'enterprise-tenant-abc',
        prompt: 'This is a highly dangerous-word prompt',
        providerId: 'google-gemini',
      };

      await expect(gatewayFacade.execute(request)).rejects.toThrow('Prompt rejected by safety policy');
    });

    it('should throw an error if requested provider is not registered in the system', async () => {
      const request: ExecuteRequest = {
        tenantId: 'enterprise-tenant-abc',
        prompt: 'Hello',
        providerId: 'non-existent-provider',
      };

      await expect(gatewayFacade.execute(request)).rejects.toThrow('Required provider with ID "non-existent-provider" is not registered');
    });

    it('should fallback to default router if provider or model is not specified', async () => {
      const request: ExecuteRequest = {
        tenantId: 'enterprise-tenant-abc',
        prompt: 'Hello default router',
      };

      const response = await gatewayFacade.execute(request);
      expect(response.metadata.provider).toBe('google-gemini');
    });

    it('should stream the response successfully and return unified chunks', async () => {
      const request: ExecuteRequest = {
        tenantId: 'enterprise-tenant-abc',
        prompt: 'Hello stream',
        providerId: 'google-gemini',
      };

      const stream = await gatewayFacade.stream(request);
      const chunks: string[] = [];

      for await (const chunk of stream) {
        chunks.push(chunk.content);
        expect(chunk.isStreaming).toBe(true);
        expect(chunk.metadata.provider).toBe('google-gemini');
      }

      expect(chunks.length).toBeGreaterThan(0);
    });

    it('should record accounting metrics correctly in the ledger', async () => {
      const request: ExecuteRequest = {
        tenantId: 'accounting-ledger-tenant',
        prompt: 'Calculate ledger transactions',
        providerId: 'google-gemini',
      };

      const response = await gatewayFacade.execute(request);
      const summary = await acc.getSummary('accounting-ledger-tenant', new Date(Date.now() - 10000), new Date(Date.now() + 10000));
      expect(summary.totalRequests).toBe(1);
      expect(summary.totalCostUSD).toBe(response.cost.estimatedCostUSD);
    });

    it('should assess the correct health metrics through the monitor', () => {
      const healthMonitor = new GatewayHealthMonitor(providerReg, router, tel, testPolicy);
      const health = healthMonitor.checkHealth();

      expect(health.status).toBe('DEGRADED'); // Only 1 provider registered
      expect(health.components.providers.availableProviders).toContain('google-gemini');
      expect(health.components.registry.count).toBe(1);
      expect(health.components.router.status).toBe('HEALTHY');
      expect(health.components.safety.status).toBe('HEALTHY');
      expect(health.components.telemetry.status).toBe('HEALTHY');
    });
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;
