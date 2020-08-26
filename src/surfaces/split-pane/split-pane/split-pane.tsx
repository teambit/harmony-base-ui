import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';
import type { PaneProps } from '@teambit/base-ui.surfaces.split-pane.pane';
import type { SplitterProps } from '@teambit/base-ui.surfaces.split-pane.splitter';

import { calcSplit } from './calc-split';
import { useDragTracker } from './use-drag-tracker';
import styles from './split-pane.module.scss';

export type Size = number | string | undefined;

export type SplitPaneProps = React.HTMLAttributes<HTMLDivElement> & {
	initialRatio?: number;
	size?: Size;
	layout?: Layout;
	children: [ReactElement<PaneProps>, ReactElement<SplitterProps>, ReactElement<PaneProps>];
};

export function SplitPane({
	layout = Layout.column,
	size = '38%',
	className,
	children,
	...rest
}: SplitPaneProps) {
	const containerRef = React.createRef<HTMLDivElement>();

	const [snapshot, isDragging, setDragging] = useDragTracker(containerRef);
	const [A, B] = calcSplit(snapshot, layout, size);

	// clone children to add props
	const [left, splitter, right] = children;
	const leftWithSize = React.cloneElement(left, { size: A });
	const rightWithSize = React.cloneElement(right, { size: B });
	const splitterWithDrag = React.cloneElement(splitter, {
		onDragging: setDragging,
		isDragging,
	});

	return (
		<div
			{...rest}
			ref={containerRef}
			className={classNames(isDragging && styles.isDragging, styles.splitPane, className)}
			data-is-dragging={isDragging}
			data-split-layout={layout}
		>
			{leftWithSize}
			{splitterWithDrag}
			{rightWithSize}
		</div>
	);
}
