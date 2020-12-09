import React, { isValidElement } from 'react';
import styles from './checkbox-label.module.scss';
import { CheckmarkInputIndicator } from '../checkmark-input-indicator';
import { CheckboxLabelProps, CheckboxLabel } from '../../checkbox-label';

export type CheckmarkLabelProps = CheckboxLabelProps;

export function CheckmarkLabel(props: CheckboxLabelProps) {
	const child =
		isValidElement(props.children) || !!props.children ? (
			props.children
		) : (
			<span>{props.children}</span>
		);

	return (
		<CheckboxLabel
			{...props}
			className={styles.checkboxLabel}
			indicator={<CheckmarkInputIndicator />}
		>
			{child}
		</CheckboxLabel>
	);
}
