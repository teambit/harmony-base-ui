import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';

import styles from './pane.module.scss';

export type PaneProps = React.HTMLAttributes<HTMLDivElement> & {
	size?: number | string;
	layout?: Layout;
};

export function Pane({ size, style, className, layout, ...rest }: PaneProps) {
	const runtimeStyles: CSSProperties = {
		flexGrow: size === undefined ? 1 : undefined,
		flexBasis: size ?? 0,
	};

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

// function layoutToStyle(layout?: Layout) {
//   if (!layout) return undefined;
//   if (layout.includes(LayoutFeatures.column)) {
//     return 'height';
//   }
//   if (layout.includes(LayoutFeatures.row)) {
//     return 'width';
//   }
//   return undefined;
// }
