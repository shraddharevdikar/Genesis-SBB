import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface MonitoringService {
  startSession(command: RuntimeCommand): Promise<RuntimeResult>;
  evaluateHealth(command: RuntimeCommand): Promise<RuntimeResult>;
  evaluateSLA(command: RuntimeCommand): Promise<RuntimeResult>;
  raiseAlert(command: RuntimeCommand): Promise<RuntimeResult>;
  getMonitoringMetrics(query: RuntimeQuery): Promise<RuntimeResult>;
}
