/**
 * Optionally append prefix/postfix to a string.
 * @returns affixed string, or undefined if target is empty or undefined
 */
export function affix(prefix = '', str?: string, suffix = '') {
	if (!str) return '';

	return `${prefix}${str}${suffix}`;
}
