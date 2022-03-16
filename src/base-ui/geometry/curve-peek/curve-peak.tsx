import React from 'react';
import classNames from 'classnames';

import styles from './curve-peek.module.scss';

export type SemicircleProps = React.SVGProps<SVGSVGElement>;

/**
 * An SVG component shaped like a parabola. Useful for separating two sections.<br/>
 * Being an html element, this component is very light and don't require an additional network request.<br/>
 */
export function CurvePeek(props: SemicircleProps) {
	const { className, ...rest } = props;

	return (
		<svg
			{...rest}
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			className={classNames(styles.curvePeek, className)}
		>
			<path d="M 0,100 Q 50,-100 100,100" />
		</svg>
	);
}

export function CurveValley(props: SemicircleProps) {
	const { className, ...rest } = props;

	return (
		<svg
			{...rest}
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			className={classNames(styles.curvePeek, className)}
		>
			<path d="M 0,0 Q 50,200 100,0" />
		</svg>
	);
}
