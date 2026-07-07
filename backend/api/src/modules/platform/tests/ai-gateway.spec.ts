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
  DefaultOutputValidator
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
      return { text: 'Hello from Gemini!' };
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
});

declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;
