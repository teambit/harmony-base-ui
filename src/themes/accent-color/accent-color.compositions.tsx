import React, { useState } from 'react';
import { colorPalette } from './index';
import styles from './accent-color.compositions.module.scss';

// import React, { useState } from 'react';
// import { themes, Theme } from '@bit/kutner.temp.neon.themes';
// import { ColorTemplate } from '@bit/kutner.temp.color-template';

export const Preview = () => {
	const [themeName, setTheme] = useState<keyof typeof colorPalette>('primary');
	const actualTheme = colorPalette[themeName];

	return (
		<div style={{ display: 'flex' }}>
			<div
				className={
					// actual theme injection:
					actualTheme + ' ' + styles.preview
				}
			>
				<div className={styles.bg}>
					<div className={styles.accentText}>accent text</div>
					<div>some regular text</div>
					<button className={styles.btn}>accent colored box</button>
				</div>
			</div>

			<ThemePicker
				onChange={(theme) => setTheme(theme)}
				themes={Object.keys(colorPalette)}
			/>
		</div>
	);
};

function ThemePicker({ onChange, themes }: { onChange: (key: any) => void; themes: any[] }) {
	return (
		<div>
			&nbsp;Accent Palette:
			{themes.map((key) => (
				<div>
					<label htmlFor={key} onChange={() => onChange(key)}>
						<input key={key} type="radio" id={key} value={key} name="themes" />
						{key}
					</label>
				</div>
			))}
		</div>
	);
}

// import styles from './color-card.module.scss';

export {};
// import Color from 'color';
// import { CardTemplate } from '../card-template';

// type ColorCardProps = {
// 	colorName?: string;
// 	color: string;
// };

// const cardStyles = {
// 	display: 'flex',
// 	flexDirection: 'column',
// 	alignItems: 'center !important',
// 	justifyContent: 'space-evenly !important',

// 	border: '1px solid var(--bit-border-color)',
// 	borderRadius: 8,
// 	padding: 8,
// 	margin: 4,
// 	userSelect: 'none',
// 	transition: 'all 300ms',
// };

// function ColorCard({ colorName = 'default', color }: ColorCardProps) {
// 	let hex = color;
// 	let hsl = undefined;

// 	try {
// 		const clr = Color(color);
// 		hex = clr.hex().toString();
// 		hsl = clr.hsl().round().toString();
// 	} catch {}

// 	return (
// 		<CardTemplate
// 			styles={{...cardStyles}}
// 			// style={{ background: color }}
// 		>
// 			<div className={styles.subcard + ' ' + styles.name}>{colorName}</div>
// 			{hex && <div className={styles.subcard + ' ' + styles.hex}>{hex}</div>}
// 			{hsl && <div className={styles.subcard + ' ' + styles.hsl}>{hsl}</div>}
// 		</CardTemplate>
// 	);
// }
