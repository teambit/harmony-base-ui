import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import styles from './splitter.module.scss';

export interface SplitterProps extends HTMLAttributes<HTMLDivElement> {
  isDragging?: boolean;
  onDragging?: (v: React.SetStateAction<boolean>) => void;
}

export function Splitter({ onDragging, isDragging, className, ...rest }: SplitterProps) {
  return (
    <div
      {...rest}
      className={classNames(styles.splitter, className)}
      onMouseDown={() => onDragging?.(true)}
      onTouchStart={() => onDragging?.(true)}
    />
  );
}
