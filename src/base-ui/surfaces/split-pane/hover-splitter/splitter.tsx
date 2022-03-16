import { Splitter, SplitterProps } from '@teambit/base-ui.surfaces.split-pane.splitter';
import cn from 'classnames';
import React from 'react';

import styles from './splitter.module.scss';

export function HoverSplitter({ children, className, ...rest }: SplitterProps) {
	return (
		<Splitter {...rest} className={cn(styles.hoverSplitter, className)}>
			<div className={styles.highlighter} />
			{children}
		</Splitter>
	);
}
