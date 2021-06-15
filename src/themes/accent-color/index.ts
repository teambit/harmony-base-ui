import colorStyles from './accent-color.module.scss';

/**
 * Sets the `--bit-accent-color` and `--bit-accent-heavy` for the specific use case.<br/>
 * Effects the color of many elements, such as `<ThemedText>` and `<Button>`.
 * @name colorPalette
 */
export const colorPalette = {
	primary: colorStyles.primary,
	primaryLight: colorStyles.muted,
	complementary: colorStyles.process,

	neutral: colorStyles.neutral,
	neutralHeavy: colorStyles.emphasized,

	error: colorStyles.impulsive,
	warning: colorStyles.hungry,
	success: colorStyles.success,

	// intents:
	aciton: colorStyles.impulsive,
	consider: colorStyles.hungry,
	continue: colorStyles.success,
	process: colorStyles.process,
	// waste: colorStyles.neutral,
};
