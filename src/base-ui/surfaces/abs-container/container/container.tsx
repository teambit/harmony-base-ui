import React, { MutableRefObject, CSSProperties } from 'react';
import cn from 'classnames';
import styles from '../abs-container.module.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	open?: boolean;
	forwardRef?: MutableRefObject<HTMLDivElement>;
	/** moves the target way from the source by this margin */
	margin?: string | number;
	/**
	 * moves the target perpendicular from the source by this margin
	 * e.g. `indent={8}` in position 'bottom-start' will move the target 8 pixels to the right.
	 */
	indent?: string | number;
}

export function Container({
	className,
	open,
	margin,
	indent,
	forwardRef,
	style,
	...rest
}: ContainerProps) {
	return (
		<div
			ref={forwardRef}
			className={cn(styles.container, className)}
			data-open={open}
			style={addDisplacement(margin, indent, style)}
			{...rest}
		/>
	);
}

// could memo, but needs to be react15 compatible, and perf should be decent
function addDisplacement(
	margin?: string | number,
	indent?: string | number,
	baseStyles?: CSSProperties
): CSSProperties | undefined {
	if (!margin && !indent) return baseStyles;

	const displacement = {
		'--bit-drawer-margin': pixalize(margin),
		'--bit-drawer-indent': pixalize(indent),
	};

	return { ...baseStyles, ...displacement };
}

function pixalize(value?: string | number) {
	if (typeof value === 'number') return `${value}px`;
	return value;
}
