export class PromiseCanceledError extends Error {
  constructor() {
    super('Promise was canceled');
  }
}

export class CancelablePromise<T> {
  constructor(private _promise: Promise<T>) {}

  private reject!: (reason?: any) => void;
  private race: Promise<T> = Promise.race([
    this._promise,
    new Promise<T>((_, reject) => {
      this.reject = reject;
    }),
  ]);

  get promise() {
    return this.race;
  }

  cancel() {
    this.reject(new PromiseCanceledError());
  }
}
