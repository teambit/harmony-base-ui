import React from 'react';
import classnames from 'classnames';
import { classes } from './checked-indicator.classes';

export type CheckedIndicatorProps = React.HTMLAttributes<HTMLSpanElement>;
export function CheckedIndicator(props: CheckedIndicatorProps) {
	return (
		<span {...props} className={classnames(props.className, classes.checkedIndicator)} />
	);
}
