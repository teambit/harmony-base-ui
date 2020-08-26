import React, { ReactNode, CSSProperties } from 'react';

type PaneProps = {
	children?: ReactNode;
	size: number;
};

export function Pane({ size, children }: PaneProps) {
	const styles: CSSProperties = {
		flexGrow: size
	};

	return (
		<div className="split-pane" style={styles}>
			{children}
		</div>
	);
}

//old calculation, using width/height instead of 'flex' size.

// function calcHeightWidth(layout, size){
// 	const styles: CSSProperties = {}
	
// 	if (size !== undefined && layout.includes('row')) {
// 		styles.width = '0%';
// 	} else {
// 		styles.width = '100%';
// 	}

// 	if (layout.includes('column')) {
// 		styles.height = '0%';
// 	} else {
// 		styles.height = '100%';
// 	}

// 	styles.width = toPercent(styles.width);
// 	styles.height = toPercent(styles.height);
// }

// function toPercent(value: string | number) {
// 	if (!value) return value;

// 	return `${value}%`;
// }
