import { StreamStatus } from '../types/stream-status.js';
import { CancellationToken } from './cancellation-token.js';
import { StreamResumeOption } from './stream-resume.js';

export interface StreamController {
  readonly streamId: string;
  getStatus(): StreamStatus;
  start(): Promise<void>;
  pause(): Promise<void>;
  resume(option?: StreamResumeOption): Promise<void>;
  cancel(token?: CancellationToken): Promise<void>;
  close(): Promise<void>;
}

export class DefaultStreamController implements StreamController {
  private status: StreamStatus = StreamStatus.CREATED;

  constructor(public readonly streamId: string) {}

  public getStatus(): StreamStatus {
    return this.status;
  }

  public async start(): Promise<void> {
    if (this.status !== StreamStatus.CREATED) {
      throw new Error(`Cannot start stream in status "${this.status}"`);
    }
    this.status = StreamStatus.RUNNING;
  }

  public async pause(): Promise<void> {
    if (this.status !== StreamStatus.RUNNING) {
      throw new Error(`Cannot pause stream in status "${this.status}"`);
    }
    this.status = StreamStatus.PAUSED;
  }

  public async resume(option?: StreamResumeOption): Promise<void> {
    if (this.status !== StreamStatus.PAUSED) {
      throw new Error(`Cannot resume stream in status "${this.status}"`);
    }
    this.status = StreamStatus.RESUMED;
  }

  public async cancel(token?: CancellationToken): Promise<void> {
    this.status = StreamStatus.CANCELLED;
    if (token) {
      token.cancel();
    }
  }

  public async close(): Promise<void> {
    this.status = StreamStatus.COMPLETED;
  }
}
