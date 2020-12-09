import React from 'react';
import classnames from 'classnames';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { CheckedIndicator, CheckedIndicatorProps } from '@teambit/base-ui.input.checked-indicator';

import styles from './checkmark-input-indicator.module.scss';

export type CheckmarkInputIndicatorProps = CheckedIndicatorProps;

/**
 * An input checkbox indicator, using the checkmark icon.
 * This component will show a full check mark when following a checked `<input />`,
 * otherwise it will show an empty box
 */
export function CheckmarkInputIndicator(props: CheckedIndicatorProps) {
	return (
		<CheckedIndicator
			{...props}
			className={classnames(props.className, styles.checkmarkInputIndicator)}
		>
			<BaseIcon of="check-mark" className={styles.icon} />
		</CheckedIndicator>
	);
}
