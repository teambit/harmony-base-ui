const SCREEN_BREAKPOINT = 768;

export enum LayoutFeatures {
	row = 'row',
	column = 'column',
	reverse = 'reverse',
	first = 'first',
	last = 'last',
}

export enum Layout {
	row = 'row',
	rowReverse = 'row reverse',
	column = 'column',
	columnReverse = 'column reverse',
	top = 'column first',
	topReverse = 'column first reverse',

	left = 'row first',
	right = 'row last',

	// leftReverse = 'row first reverse',
	// bottom = 'column last',
	// bottomReverse = 'column last reverse',
}

export const layoutToggleMap = {
	[Layout.columnReverse]: Layout.row,
	[Layout.row]: Layout.columnReverse,
};

export const default_layout = Layout.row;

export function layoutByWindowWidth(): Layout | undefined {
	if (typeof window === 'undefined') return undefined;
	const viewWidth = window.innerWidth;

	if (viewWidth < SCREEN_BREAKPOINT) {
		return Layout.columnReverse;
	}
	return undefined;
}