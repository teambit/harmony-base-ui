import { useCallback, useMemo, useRef } from 'react';
import { Nav1D } from './use-1d-nav';

export type KeyEvent<TElement = HTMLElement> = (e: React.KeyboardEvent<TElement>) => void;
export type KeyHandlers<TElement = HTMLElement> = Record<string, KeyEvent<TElement>>;

export function useKey1dNav<TElement = HTMLElement>(
  forwardCallback: undefined | ((e: React.KeyboardEvent<TElement>) => void),
  nav: Nav1D,
  direction: 'vertical' | 'horizontal' = 'vertical',
  additionalHandlers?: KeyHandlers
) {
  const keyHandlers = useMemo(() => {
    const vertical = {
      ArrowDown: nav.increment,
      ArrowUp: nav.decrement,
    };

    const horizontal = {
      ArrowRight: nav.increment,
      ArrowLeft: nav.decrement,
    };

    return {
      ...(direction === 'vertical' && vertical),
      ...(direction === 'horizontal' && horizontal),
      ...additionalHandlers,
    };
  }, [nav.increment, nav.decrement, direction, additionalHandlers]);

  const eventHandler = useKeyHandler(forwardCallback, keyHandlers);
  return eventHandler;
}

export function useKeyHandler<TElement = HTMLElement>(
  forwardCallback: undefined | ((e: React.KeyboardEvent<TElement>) => void),
  keyHandlers: KeyHandlers<TElement>
) {
  const handlersRef = useRef(keyHandlers);
  handlersRef.current = keyHandlers;

  return useCallback(
    (e: React.KeyboardEvent<TElement>) => {
      forwardCallback?.(e);
      if (e.defaultPrevented) return;

      const callback = handlersRef.current[e.key];
      if (!callback) return;

      e.preventDefault();
      callback(e);
    },
    [forwardCallback]
  );
}
