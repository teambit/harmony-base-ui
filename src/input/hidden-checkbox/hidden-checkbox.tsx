import React from 'react';
import classnames from 'classnames';
import styles from './hidden-checkbox.module.scss';

export type HiddenCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
export function HiddenCheckbox(props: HiddenCheckboxProps) {
	return (
		<input
			{...props}
			type="checkbox"
			className={classnames(props.className, styles.hidden)}
		/>
	);
}
