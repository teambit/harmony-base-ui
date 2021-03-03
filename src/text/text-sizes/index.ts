import styles from './text-sizes.module.scss';

const sizes = {
	/**
	 * @default 12px
	 */
	xxs: styles.xxs as string,
	/**
	 * @default 14px
	 */
	xs: styles.xs as string,
	/**
	 * @default 15px
	 */
	sm: styles.sm as string,
	/**
	 * @default 16px
	 */
	md: styles.md as string,
	/**
	 * @default 18px
	 */
	lg: styles.lg as string,
	/**
	 * @default 20px
	 */
	xl: styles.xl as string,
	/**
	 * @default 24px
	 */
	xxl: styles.xxl as string,
};

export const textSize = sizes;
