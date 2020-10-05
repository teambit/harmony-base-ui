import React, { forwardRef } from 'react';
import cn from 'classnames';
import styles from '../abs-container.module.scss';

export type ContainerProps = { open?: boolean } & React.HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
	{ className, open, ...rest },
	ref
) {
	return (
		<div ref={ref} className={cn(styles.container, className)} data-open={open} {...rest} />
	);
});
