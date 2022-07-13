import { useCallback, useState } from 'react';

export type Nav1D = {
  activeIdx: number;
  isActive: (index: number) => boolean;
  increment: () => void;
  decrement: () => void;
  reset: (nextIndex?: number) => void;
};

const MIN_IDX = 0;
export function use1dNav(length: number, startIdx = 0): Nav1D {
  const [activeIdx, setActive] = useState(startIdx);

  const increment = useCallback(() => setActive((x) => Math.min(x + 1, length - 1)), [length]);
  const decrement = useCallback(() => setActive((x) => Math.max(x - 1, MIN_IDX)), []);
  const reset = useCallback((nextIndex: number = startIdx) => setActive(nextIndex), [startIdx]);
  const isActive = useCallback((index: number) => index === activeIdx, [activeIdx]);

  return {
    activeIdx,
    isActive,
    increment,
    decrement,
    reset,
  };
}
