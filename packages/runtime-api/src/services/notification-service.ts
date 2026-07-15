import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface NotificationService {
  dispatchNotification(command: RuntimeCommand): Promise<RuntimeResult>;
  muteChannel(command: RuntimeCommand): Promise<RuntimeResult>;
  unmuteChannel(command: RuntimeCommand): Promise<RuntimeResult>;
  getDeliveryStatus(query: RuntimeQuery): Promise<RuntimeResult>;
}
