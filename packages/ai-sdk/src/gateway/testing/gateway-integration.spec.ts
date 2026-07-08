import { AIFacade } from '../facade/ai-facade.js';
import { ProviderRegistry, ProviderDescriptor, ProviderHealthStatus } from '../../providers/index.js';
import { DefaultModelRouter } from '../../routing/index.js';
import { AITelemetry } from '../../telemetry/ai-telemetry.js';
import { DefaultAccountingEngine } from '../../accounting/tracking/accounting-engine.js';
import { SafetyPolicy } from '../../safety/index.js';
import { MockChatProvider } from './provider-mocks.js';
import { ExecuteRequest } from '../api/execute-request.js';

describe('Unified AI Gateway API Integration Tests (GEN-AI-010)', () => {
  let providerRegistry: ProviderRegistry;
  let modelRouter: DefaultModelRouter;
  let telemetry: AITelemetry;
  let accounting: DefaultAccountingEngine;
  let facade: AIFacade;

  const defaultPolicy: SafetyPolicy = {
    id: 'policy-1',
    name: 'Standard Safety Policy',
    promptThresholds: [],
    outputThresholds: [],
    blockPII: false,
  };

  beforeEach(() => {
    providerRegistry = new ProviderRegistry();
    modelRouter = new DefaultModelRouter();
    telemetry = new AITelemetry();
    accounting = new DefaultAccountingEngine();

    const primaryProvider = new MockChatProvider('Success response from Primary Mock Provider');
    const primaryDescriptor: ProviderDescriptor = {
      providerId: 'mock-provider',
      name: 'Mock Provider',
      version: '1.0.0',
      capabilities: ['chat', 'reasoning', 'embedding', 'vision', 'streaming'],
      status: ProviderHealthStatus.HEALTHY,
      priority: 10,
      costTier: 'LOW',
    };
    providerRegistry.register(primaryProvider, primaryDescriptor);

    facade = new AIFacade(
      providerRegistry,
      modelRouter,
      telemetry,
      accounting,
      defaultPolicy
    );
  });

  it('should successfully execute a unified gateway request', async () => {
    const request: ExecuteRequest = {
      tenantId: 'tenant-123',
      prompt: 'Hello, how are you today?',
      providerId: 'mock-provider',
    };

    const response = await facade.execute(request);

    expect(response.id).toBeDefined();
    expect(response.content).toContain('Success response from Primary Mock Provider');
    expect(response.metadata.provider).toBe('mock-provider');
    expect(response.usage.promptTokens).toBeGreaterThan(0);
    expect(response.safety.safe).toBe(true);
    expect(response.cost.estimatedCostUSD).toBeGreaterThan(0);
    expect(response.telemetry.requestId).toBeDefined();
  });

  it('should block execution when safety policy is triggered', async () => {
    const request: ExecuteRequest = {
      tenantId: 'tenant-123',
      prompt: 'Write something hate filled',
      providerId: 'mock-provider',
    };

    await expect(facade.execute(request)).rejects.toThrow('Prompt rejected by safety policy');
  });

  it('should fail when requested provider is unavailable/not registered', async () => {
    const request: ExecuteRequest = {
      tenantId: 'tenant-123',
      prompt: 'Hi',
      providerId: 'unavailable-provider',
    };

    await expect(facade.execute(request)).rejects.toThrow('Required provider with ID "unavailable-provider" is not registered');
  });

  it('should fall back to default provider/model routing when not specified', async () => {
    const geminiMock = new MockChatProvider('Gemini routing response');
    const geminiDescriptor: ProviderDescriptor = {
      providerId: 'google-gemini',
      name: 'Google Gemini Provider',
      version: '1.0.0',
      capabilities: ['chat', 'reasoning', 'embedding', 'vision', 'streaming'],
      status: ProviderHealthStatus.HEALTHY,
      priority: 10,
      costTier: 'LOW',
    };
    providerRegistry.register(geminiMock, geminiDescriptor);

    const request: ExecuteRequest = {
      tenantId: 'tenant-123',
      prompt: 'Hello AI routing',
    };

    const response = await facade.execute(request);
    expect(response.metadata.provider).toBe('google-gemini');
    expect(response.content).toBe('Gemini routing response');
  });

  it('should support streaming execute response chunks', async () => {
    const request: ExecuteRequest = {
      tenantId: 'tenant-123',
      prompt: 'Hello stream',
      providerId: 'mock-provider',
    };

    const stream = await facade.stream(request);
    const chunks: string[] = [];

    for await (const chunk of stream) {
      chunks.push(chunk.content);
      expect(chunk.isStreaming).toBe(true);
      expect(chunk.metadata.provider).toBe('mock-provider');
    }

    expect(chunks.length).toBeGreaterThan(0);
    expect(chunks.join('')).toContain('Success response from Primary Mock Provider');
  });

  it('should accurately record accounting ledger entries', async () => {
    const request: ExecuteRequest = {
      tenantId: 'accounting-tenant',
      prompt: 'Record this ledger expense',
      providerId: 'mock-provider',
    };

    const response = await facade.execute(request);
    
    const summary = await accounting.getSummary('accounting-tenant', new Date(Date.now() - 5000), new Date(Date.now() + 5000));
    expect(summary.totalRequests).toBe(1);
    expect(summary.totalCostUSD).toBe(response.cost.estimatedCostUSD);
  });

  it('should record transaction telemetry metrics', async () => {
    const request: ExecuteRequest = {
      tenantId: 'telemetry-tenant',
      prompt: 'Log this telemetry',
      providerId: 'mock-provider',
    };

    await facade.execute(request);
    const events = telemetry.getEvents();
    expect(events.length).toBeGreaterThan(0);
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;
