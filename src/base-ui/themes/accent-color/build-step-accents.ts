import colorStyles from './accent-color.module.scss';

export type BuildSteps = 'success' | 'failure' | 'pending' | 'processing' | 'skipped' | 'unknown';
export type BuildStepWithUppercase = BuildSteps | Uppercase<BuildSteps>;

export const buildStepPalette: Record<BuildStepWithUppercase, string> = {
	success: colorStyles.success,
	failure: colorStyles.impulsive,
	pending: colorStyles.neutral,
	processing: colorStyles.process,
	skipped: colorStyles.hungry,
	unknown: colorStyles.neutral,

	// prefer lowercase
	SUCCESS: colorStyles.success,
	FAILURE: colorStyles.impulsive,
	PENDING: colorStyles.neutral,
	PROCESSING: colorStyles.process,
	SKIPPED: colorStyles.hungry,
	UNKNOWN: colorStyles.neutral,
};
