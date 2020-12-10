import React from 'react';
import classnames from 'classnames';
import styles from './checkbox-indicator.module.scss';

export type CheckboxIndicatorProps = React.HTMLAttributes<HTMLSpanElement>;

export const classes = {
	checkedIndicator: styles.checkedIndicator,
	defaultCheckbox: styles.defaultCheckbox,
};

export function CheckboxIndicator(props: CheckboxIndicatorProps) {
	return (
		<span {...props} className={classnames(props.className, classes.checkedIndicator)} />
	);
}
