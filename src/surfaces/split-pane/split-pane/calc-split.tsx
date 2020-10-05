import { Layout, LayoutFeatures } from '@teambit/base-ui.surfaces.split-pane.layout';

import { Size } from './split-pane';
import { DragSnapshot } from './use-drag-tracker';

export function calcSplit(snapshot: DragSnapshot | undefined, layout: Layout, defaultSize: Size): [Size, Size] {
  const splitSize = calcPixels(snapshot, layout, defaultSize);

	// update values to match `flex-direction: *-reverse`
  if (layout.includes(LayoutFeatures.reverse)) {
    splitSize.reverse();
  }

  return splitSize;
}

function calcPixels(snapshot: DragSnapshot | undefined, layout: Layout, defaultSize: Size): [Size, Size] {
  const { row, column, first, last } = LayoutFeatures;
  const features = new Set(layout.split(' '));

  // show only top, left
  if (features.has(first)) {
    return ['100%', '0%'];
  }

  // show only bottom, right
  if (features.has(last)) {
    return ['0%', '100%'];
  }

  // horizontal
  if (features.has(row)) {
    if (snapshot?.x === undefined) return calcDefaultSize(defaultSize);

    if (typeof defaultSize === 'string' && defaultSize.endsWith('%')) {
      return [`${(100 * snapshot.x) / snapshot.width}%`, undefined];
    }

    return [snapshot.x, undefined];
  }

  // vertical:
  if (features.has(column)) {
    if (snapshot?.y === undefined) return calcDefaultSize(defaultSize);

    if (typeof defaultSize === 'string' && defaultSize.endsWith('%')) {
      return [`${(100 * snapshot.y) / snapshot.height}%`, undefined];
    }

    return [snapshot.y, undefined];
  }

  return [undefined, undefined];
}

/**
 * handles negative syntax (e.g. size="-200px")
 */
function calcDefaultSize(defaultSize: Size): [Size, Size] {
  if (!defaultSize) return [undefined, undefined];

  if (typeof defaultSize === 'number' && defaultSize < 0) {
    return [undefined, -defaultSize];
  }
  if (typeof defaultSize === 'string' && defaultSize.startsWith('-')) {
    return [undefined, defaultSize.substring(1)];
  }

  return [defaultSize, undefined];
}
