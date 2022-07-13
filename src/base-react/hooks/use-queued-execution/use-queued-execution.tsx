import { useCallback, useRef } from 'react';
import { CancelablePromise } from './cancelable-promise';
export { PromiseCanceledError } from './cancelable-promise';

export function useQueuedExecution<F extends (...args: any[]) => any>(func: F): F {
  const pendingRef = useRef<CancelablePromise<any> | undefined>(undefined);

  return useCallback<F>(
    // @ts-ignore - I couldn't set the parameter/return type
    (...args: any[]) => {
      if (pendingRef.current) {
        pendingRef.current.cancel();
        pendingRef.current = undefined;
      }

      const result = func(...args);

      if ('then' in result) {
        const cancelable = new CancelablePromise(result);
        pendingRef.current = cancelable;
        return cancelable.promise;
      }

      return result;
    },
    [func]
  );
}
