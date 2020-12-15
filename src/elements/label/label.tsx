import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export type LabelProps = {
	/**
	 * override label background color
	 */
	color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Label({ color, className, ...rest }: LabelProps) {
	return (
		<div
			className={classNames(styles.label, className)}
			style={{ background: color }}
			data-bit-id="bit.base-ui/elements/label"
			{...rest}
		/>
	);
}
