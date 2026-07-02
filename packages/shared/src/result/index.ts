export class Result<T, E = Error> {
  private readonly _isSuccess: boolean;
  private readonly _value?: T;
  private readonly _error?: E;

  private constructor(isSuccess: boolean, value?: T, error?: E) {
    this._isSuccess = isSuccess;
    this._value = value;
    this._error = error;
  }

  public get isSuccess(): boolean {
    return this._isSuccess;
  }

  public get isFailure(): boolean {
    return !this._isSuccess;
  }

  public get value(): T {
    if (this.isFailure) {
      throw new Error('Cannot retrieve value of a failed Result. Use getError() or check isSuccess first.');
    }
    return this._value as T;
  }

  public get error(): E {
    if (this.isSuccess) {
      throw new Error('Cannot retrieve error of a successful Result. Check isFailure first.');
    }
    return this._error as E;
  }

  public static success<T, E = Error>(value: T): Result<T, E> {
    return new Result<T, E>(true, value, undefined);
  }

  public static failure<T, E = Error>(error: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  public map<U>(f: (val: T) => U): Result<U, E> {
    if (this.isSuccess) {
      return Result.success<U, E>(f(this.value));
    }
    return Result.failure<U, E>(this.error);
  }

  public flatMap<U>(f: (val: T) => Result<U, E>): Result<U, E> {
    if (this.isSuccess) {
      return f(this.value);
    }
    return Result.failure<U, E>(this.error);
  }
}

export type Success<T> = Result<T, never>;
export type Failure<E> = Result<never, E>;
