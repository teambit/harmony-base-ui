import React from 'react';
import cn from 'classnames';

import Splitter from '@teambit/base-ui.surfaces.split-pane.splitter';
import { SplitterProps } from '@teambit/base-ui.surfaces.split-pane.splitter';

import styles from './fat-splitter.module.scss';

export function FatSplitter(props: SplitterProps) {
	return (
		<Splitter {...props} className={cn(styles.fatSplitter, props.className)}>
			<span className="column-handle">═</span>
			<span className="row-handle">║</span>
		</Splitter>
	);
}
