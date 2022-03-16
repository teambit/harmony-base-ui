import classNames from 'classnames';
import React from 'react';

import styles from './loader-ribbon.module.scss';

export interface LoaderRibbonProps extends React.HTMLAttributes<HTMLDivElement> {
	active?: boolean;
}

/**
 * A progress-bar like loader, with a fadeout animation to emphasize completion.
 */
export function LoaderRibbon({ active, className, ...rest }: LoaderRibbonProps) {
	return (
		<div
			{...rest}
			className={classNames(className, styles.loader, active && styles.loading)}
		>
			<div className={styles.progress} />
		</div>
	);
}
