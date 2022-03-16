import { Splitter, SplitterProps } from '@teambit/base-ui.surfaces.split-pane.splitter';
import cn from 'classnames';
import React from 'react';

import styles from './fat-splitter.module.scss';

export function FatSplitter(props: SplitterProps) {
  return (
    <Splitter {...props} className={cn(styles.fatSplitter, props.className)}>
      <span className={styles.columnHandle}>═</span>
      <span className={styles.rowHandle}>║</span>
    </Splitter>
  );
}
