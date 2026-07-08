export interface CancellationToken {
  readonly isCancelled: boolean;
  cancel(): void;
  onCancel(callback: () => void): void;
}

export class DefaultCancellationToken implements CancellationToken {
  private _isCancelled = false;
  private readonly callbacks: Array<() => void> = [];

  public get isCancelled(): boolean {
    return this._isCancelled;
  }

  public cancel(): void {
    if (this._isCancelled) return;
    this._isCancelled = true;
    for (const cb of this.callbacks) {
      try {
        cb();
      } catch {
        // ignore callback exceptions during cancellation propagation
      }
    }
  }

  public onCancel(callback: () => void): void {
    if (this._isCancelled) {
      callback();
      return;
    }
    this.callbacks.push(callback);
  }
}
