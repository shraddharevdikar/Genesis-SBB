import { TraceContext } from './trace-context.js';

export interface TraceSpan {
  readonly context: TraceContext;
  readonly name: string;
  readonly startTime: number;
  readonly attributes: Record<string, any>;
  
  setAttribute(key: string, value: any): void;
  setAttributes(attributes: Record<string, any>): void;
  addEvent(name: string, attributes?: Record<string, any>): void;
  setStatus(status: 'UNSET' | 'OK' | 'ERROR', message?: string): void;
  end(): void;
}
