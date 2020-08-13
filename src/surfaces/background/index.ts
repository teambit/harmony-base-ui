import styles from './background.module.scss';

export type BackgroundLayer = 'bedrock' | 'base' | 'layer' | 'crust' | 'topping' | 'dent';

export const backgrounds: { [key in BackgroundLayer]: string } = {
	bedrock: styles.bedrock,
	base: styles.base,
	layer: styles.layer,
	crust: styles.crust,
	topping: styles.topping,
	dent: styles.dent,
};
