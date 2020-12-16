import React from 'react';
import classNames from 'classnames';
import styles from './muted-text.module.scss';

export function MutedText(props: React.HTMLAttributes<HTMLSpanElement>) {
	return <span {...props} className={classNames(styles.mutedText, props.className)} />;
}

export const mutedText = styles.mutedText;
