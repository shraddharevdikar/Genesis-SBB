import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface EventsService {
  publishEvent(command: RuntimeCommand): Promise<RuntimeResult>;
  subscribeTopic(command: RuntimeCommand): Promise<RuntimeResult>;
  unsubscribeTopic(command: RuntimeCommand): Promise<RuntimeResult>;
  getEventLineage(query: RuntimeQuery): Promise<RuntimeResult>;
}
