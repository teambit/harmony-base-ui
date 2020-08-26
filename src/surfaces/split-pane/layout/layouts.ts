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
	bottom = 'column last',
	topReverse = 'column reverse first',
	bottomReverse = 'column reverse last ',

	left = 'row first',
	right = 'row last',
	leftReverse = 'row reverse first',
	rightReverse = 'row reverse last',
}

export const layoutToggleMap = {
	[Layout.columnReverse]: Layout.row,
	[Layout.row]: Layout.columnReverse,
};

export const default_layout = Layout.row;
