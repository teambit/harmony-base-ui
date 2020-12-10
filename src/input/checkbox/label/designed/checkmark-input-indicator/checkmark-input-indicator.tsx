import React from 'react';
import classnames from 'classnames';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import {
	CheckboxIndicator,
	CheckboxIndicatorProps,
} from '@teambit/base-ui.input.checkbox.indicator';

import styles from './checkmark-input-indicator.module.scss';

export type CheckmarkInputIndicatorProps = CheckboxIndicatorProps;

/**
 * An input checkbox indicator, using the checkmark icon.
 * This component will show a full check mark when following a checked `<input />`,
 * otherwise it will show an empty box
 */
export function CheckmarkInputIndicator(props: CheckboxIndicatorProps) {
	return (
		<CheckboxIndicator
			{...props}
			className={classnames(props.className, styles.checkmarkInputIndicator)}
		>
			<BaseIcon of="check-mark" className={styles.icon} />
		</CheckboxIndicator>
	);
}
