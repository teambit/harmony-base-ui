import styles from './roundness.module.scss';
import { Roundness } from './roundness-values';
export * from './roundness-values';

export const roundnessClass: { [key in Roundness]: string } = {
	circle: styles.circle,
	default: styles.default,
	small: styles.small,
	medium: styles.medium,
	sharp: styles.sharp,
};
