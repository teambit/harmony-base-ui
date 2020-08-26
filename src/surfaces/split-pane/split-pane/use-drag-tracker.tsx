import React, { useState, useCallback, RefObject } from 'react';
import { useDragListener } from './use-pointer-drag';
import { toRelativePosition } from './to-relative-position';

export type DragSnapshot = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Coords = {
  clientX: number;
  clientY: number;
};

export function useDragTracker(containerRef: RefObject<HTMLDivElement>) {
  const [snapshot, setSnapshot] = useState<DragSnapshot>(undefined);

  const handleDrag = useCallback(
    ({ clientX, clientY }: Coords) => {
      if (!containerRef.current) return;

      const snapshot = toRelativePosition({
        clientX,
        clientY,
        element: containerRef.current,
      });

      setSnapshot(snapshot);
    },
    [containerRef]
  );

  const [isDragging, setDragging] = useDragListener(handleDrag);

  return [snapshot, isDragging, setDragging] as [
    DragSnapshot | undefined,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
}
