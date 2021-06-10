import React from 'react';
import { primaryPalette } from './index';

const colors = [
	'--bit-text-color',
	'--bit-text-color-heavy',
	'--bit-text-color-light',
	'--bit-text-inactive',
	'--bit-border-color',
	'--bit-border-color-heavy',
	'--bit-border-color-light',
	'--bit-border-color-lightest',
	'--bit-accent-color',
	'--bit-accent-heavy',
	'--bit-accent-light',
	'--bit-accent-text',
	'--bit-accent-text-heavy',
	'--bit-text-on-accent',
	'--bit-accent-bg',
	'--bit-accent-bg-heavy',
	'--bit-bg-color',
	'--bit-bg-heavy',
	'--bit-bg-heaviest',
	'--bit-bg-heaviest',
	'--bit-bg-bedrock',
	'--bit-bg-navigation',
	'--bit-bg-overlay',
	'--bit-bg-modal',
	'--bit-bg-tooltip',
	'--bit-bg-tooltip-heavy',
	'--bit-bg-dent',
	'--bit-error-color',
	'--bit-error-heavy',
	'--bit-error-light',
	'--bit-error-bg',
	'--bit-error-bg-heavy',
];

export function Preview() {
	return (
		<div className={primaryPalette}>
			{colors.map((x) => (
				<ColorBox colorName={x} />
			))}
		</div>
	);
}

function ColorBox({ colorName }: { colorName: string }) {
	return (
		<div style={{ display: 'flex', borderRadius: 4, marginBottom: 4 }}>
			<div
				style={{
					background: `var(${colorName})`,
					width: 20,
					height: 20,
					borderRadius: 4,
					marginRight: 8,
					border: '1px solid black',
				}}
			></div>
			<div>{colorName}</div>
		</div>
	);
}
