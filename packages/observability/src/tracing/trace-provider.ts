import { TraceSpan } from './trace-span.js';
import { TraceContext } from './trace-context.js';

export interface TraceProvider {
  startSpan(name: string, parentContext?: TraceContext): TraceSpan;
  getCurrentSpan(): TraceSpan | undefined;
  inject(context: TraceContext, carrier: Record<string, string>): void;
  extract(carrier: Record<string, string>): TraceContext | undefined;
}
