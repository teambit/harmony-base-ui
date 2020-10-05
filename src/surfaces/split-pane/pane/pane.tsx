import { Layout, LayoutFeatures } from '@teambit/base-ui.surfaces.split-pane.layout';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';

import styles from './pane.module.scss';

export type PaneProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: number | string;
  layout?: Layout;
};

export function Pane({ size, style, layout, className, ...rest }: PaneProps) {
  const runtimeStyles: CSSProperties = {};

  const sizeProp = layoutToStyle(layout);
  if (sizeProp && size !== undefined) {
    runtimeStyles[sizeProp] = size;
    runtimeStyles.flexShrink = 0;
  }
  if (size === undefined) {
    runtimeStyles.flexGrow = 1;
    runtimeStyles.flexBasis = 0;
  }

  return (
    <div
      {...rest}
      className={classNames(styles.pane, className)}
      style={{
        ...style,
        ...runtimeStyles,
      }}
    />
  );
}

// reverting to using height/width. flex grow/basis has some negative side effects
function layoutToStyle(layout?: Layout) {
  if (!layout) return undefined;
  if (layout.includes(LayoutFeatures.column)) {
    return 'height';
  }
  if (layout.includes(LayoutFeatures.row)) {
    return 'width';
  }
  return undefined;
}
