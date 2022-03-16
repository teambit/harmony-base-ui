import React, { useState } from 'react';
import { primaryPalette } from '@teambit/base-ui.theme.color-definition';
import { darkMode } from './index';

import styles from './dark-theme.compositions.module.scss';

const textColors = [
	'--bit-text-color',
	'--bit-text-color-heavy',
	'--bit-text-color-light',
	'--bit-text-inactive',
];
const borders = [
	'--bit-border-color',
	'--bit-border-color-heavy',
	'--bit-border-color-light',
	'--bit-border-color-lightest',
];
const accents = [
	'--bit-accent-color',
	'--bit-accent-heavy',
	'--bit-accent-light',
	'--bit-accent-text',
	'--bit-accent-text-heavy',
	'--bit-text-on-accent',
	'--bit-accent-bg',
	'--bit-accent-bg-heavy',
];
const backgrounds = [

	'--bit-bg-color',
	'--bit-bg-heavy',
	'--bit-bg-heavy',
	'--bit-bg-heaviest',
	'--bit-bg-bedrock',
	'--bit-bg-navigation',
	'--bit-bg-overlay',
	'--bit-bg-modal',
	'--bit-bg-tooltip',
	'--bit-bg-tooltip-heavy',
	'--bit-bg-dent',
];

const errors = [
	'--bit-error-color',
	'--bit-error-heavy',
	'--bit-error-light',
	'--bit-error-bg',
	'--bit-error-bg-heavy',
];

export function Texts() {
	return (
		<div className={darkMode} style={{ background: '#0c0c0c', height: '100%', boxSizing: 'border-box', padding: 8, borderRadius: 4 }}>
			{textColors.map((x) => (
				<ColorBox colorName={x} />
			))}
		</div>
	);
}

export function Accents() {
	return (
		<div className={darkMode} style={{ background: '#0c0c0c', height: '100%', boxSizing: 'border-box', padding: 8, borderRadius: 4 }}>
			{accents.map((x) => (
				<ColorBox colorName={x} />
			))}
		</div>
	);
}

export function Borders() {
	return (
		<div className={darkMode} style={{ background: '#0c0c0c', height: '100%', boxSizing: 'border-box', padding: 8, borderRadius: 4 }}>
			{borders.map((x) => (
				<ColorBox colorName={x} />
			))}
		</div>
	);
}

export function Backgrounds() {
	return (
		<div className={darkMode} style={{ background: '#0c0c0c', height: '100%', boxSizing: 'border-box', padding: 8, borderRadius: 4 }}>
			{backgrounds.map((x) => (
				<ColorBox colorName={x} />
			))}
		</div>
	);
}

export function Errors() {
	return (
		<div className={darkMode} style={{ background: '#0c0c0c', height: '100%', boxSizing: 'border-box', padding: 8, borderRadius: 4 }}>
			{errors.map((x) => (
				<ColorBox colorName={x} />
			))}
			<div>
				(may be deprecated in the future.
				<br />
				use accentColors.error instead)
			</div>
		</div>
	);
}

// (property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export function ThemeExample({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
	const [isDark, setDark] = useState(true);

	return (
		<div className={isDark ? darkMode : primaryPalette} style={{ height: '100%' }}>
			<div className={className + ' ' + styles.container} {...rest}>

				<div className={styles.regular}>
					<div className={styles.accentText}>accent text</div>
					<div>regular content</div>
					<button className={styles.btn} onClick={() => setDark(x => !x)}>toggle dark mode {isDark ? '🌙' : '☀️'}</button>
				</div>

				<br />

				<div className={styles.bg}>
					<div className={styles.accentText}>accent text</div>
					<div>interactive card</div>
					<button className={styles.btn}>accent colored box</button>
				</div>

				<br />

				<div className={styles.accentBg}>
					<div className={styles.accentText}>accent text</div>
					<div>accent card</div>
					<button className={styles.btn}>accent colored box</button>
				</div>

				<br />

				<div className={styles.accentCard}>
					<div>accent card variation 2</div>
				</div>
			</div>
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
					border: '1px solid lightgray',
				}}
			></div>
			<div>{colorName}</div>
		</div>
	);
}
