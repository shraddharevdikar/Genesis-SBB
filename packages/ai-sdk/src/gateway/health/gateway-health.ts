import { ProviderRegistry } from '../../providers/index.js';
import { ModelRouter } from '../../routing/index.js';
import { SafetyPolicy } from '../../safety/index.js';
import { AITelemetry } from '../../telemetry/ai-telemetry.js';

export interface GatewayHealthStatus {
  readonly status: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY';
  readonly timestamp: string;
  readonly components: {
    readonly providers: {
      readonly status: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY';
      readonly availableProviders: string[];
    };
    readonly registry: {
      readonly status: 'HEALTHY' | 'UNHEALTHY';
      readonly count: number;
    };
    readonly router: {
      readonly status: 'HEALTHY' | 'UNHEALTHY';
    };
    readonly safety: {
      readonly status: 'HEALTHY' | 'UNHEALTHY';
      readonly policyActive: boolean;
    };
    readonly telemetry: {
      readonly status: 'HEALTHY' | 'UNHEALTHY';
      readonly metricsTracked: number;
    };
  };
}

export class GatewayHealthMonitor {
  constructor(
    private readonly providerRegistry: ProviderRegistry,
    private readonly modelRouter?: ModelRouter,
    private readonly telemetry?: AITelemetry,
    private readonly defaultSafetyPolicy?: SafetyPolicy
  ) {}

  public checkHealth(): GatewayHealthStatus {
    const providersList = this.providerRegistry.list();
    const activeProviders = providersList.map(p => p.metadata.id);

    const registryStatus = activeProviders.length > 0 ? 'HEALTHY' : 'UNHEALTHY';
    const providerStatus = activeProviders.length >= 2 ? 'HEALTHY' : activeProviders.length > 0 ? 'DEGRADED' : 'UNHEALTHY';
    const routerStatus = this.modelRouter ? 'HEALTHY' : 'UNHEALTHY';
    const safetyStatus = 'HEALTHY';
    const telemetryStatus = this.telemetry ? 'HEALTHY' : 'UNHEALTHY';

    let overallStatus: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY' = 'HEALTHY';
    if (providerStatus === 'UNHEALTHY' || registryStatus === 'UNHEALTHY' || routerStatus === 'UNHEALTHY') {
      overallStatus = 'UNHEALTHY';
    } else if (providerStatus === 'DEGRADED') {
      overallStatus = 'DEGRADED';
    }

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      components: {
        providers: {
          status: providerStatus,
          availableProviders: activeProviders,
        },
        registry: {
          status: registryStatus,
          count: activeProviders.length,
        },
        router: {
          status: routerStatus,
        },
        safety: {
          status: safetyStatus,
          policyActive: !!this.defaultSafetyPolicy,
        },
        telemetry: {
          status: telemetryStatus,
          metricsTracked: this.telemetry ? 1 : 0,
        },
      },
    };
  }
}
