import React, { isValidElement } from 'react';
import styles from './checkbox-label.module.scss';
import { CheckboxIndicator } from '@teambit/base-ui.input.checkbox.designed.indicator';
import {
	CheckboxLabel as CheckboxLabelBase,
	CheckboxLabelProps as BaseProps,
} from '@teambit/base-ui.input.checkbox.label';

export type CheckboxLabelProps = BaseProps;

/** A styled checkbox and label. */
export function CheckboxLabel(props: BaseProps) {
	const child =
		isValidElement(props.children) || !!props.children ? (
			props.children
		) : (
			<span>{props.children}</span>
		);

	return (
		<CheckboxLabelBase
			{...props}
			className={styles.checkboxLabel}
			indicator={<CheckboxIndicator />}
		>
			{child}
		</CheckboxLabelBase>
	);
}
