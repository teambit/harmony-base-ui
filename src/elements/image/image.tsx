import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type BaseImageProps = {
	/**
	 * alt text (to comply a11y standards)
	 */
	alt: string;
	/**
	 * Makes image fill the whole width of container.
	 * same as `width: 100%`
	 */
	fullWidth?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function BaseImage({ alt, className, fullWidth, ...rest }: BaseImageProps) {
	return (
		<img
			data-bit-id="bit.base-ui/elements/image"
			alt={alt}
			{...rest}
			className={classNames(styles.image, fullWidth && styles.fullWidth, className)}
		/>
	);
}
