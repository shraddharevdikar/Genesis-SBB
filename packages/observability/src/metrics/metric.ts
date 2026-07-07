export interface Metric {
  readonly name: string;
  readonly description?: string;
  readonly labels?: Record<string, string>;
}

export interface Counter extends Metric {
  increment(value?: number, labels?: Record<string, string>): void;
}

export interface Gauge extends Metric {
  set(value: number, labels?: Record<string, string>): void;
}

export interface Histogram extends Metric {
  record(value: number, labels?: Record<string, string>): void;
}

export interface Timer extends Metric {
  start(): { end(): number };
}
