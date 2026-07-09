import { MemoryContext } from '../../core/memory-context.js';
import { ExecutiveOwner } from '../identity/executive-owner.js';

export interface ExecutiveMemoryContext extends MemoryContext {
  readonly executiveOwner: ExecutiveOwner;
  readonly activeStrategicTheme?: string;
}
