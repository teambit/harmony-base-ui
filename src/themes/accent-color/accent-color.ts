import colorStyles from './accent-color.module.scss';

/**
 * Sets the accent color variables for the specific use case.<br/>
 * Effects the color of many elements, such as `<ThemedText>` and `<Button>`.
 * @name colorPalette
 */

export const colorPalette = {
	primary: colorStyles.primary,
	// primaryLight: colorStyles.muted,
	complementary: colorStyles.complementary,

	neutral: colorStyles.neutral,
	neutralHeavy: colorStyles.emphasized,

	error: colorStyles.impulsive,
	warning: colorStyles.hungry,
	success: colorStyles.success,

	// intents:
	action: colorStyles.impulsive,
	consider: colorStyles.hungry,
	continue: colorStyles.success,
	process: colorStyles.process,
	// waste: colorStyles.neutral,
};
