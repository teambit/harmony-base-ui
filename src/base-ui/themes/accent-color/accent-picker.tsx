import React, { useState } from 'react';
import { colorPalette } from './accent-color';
import styles from './accent-picker.module.scss';

export function AccentPicker() {
	const [themeName, setTheme] = useState<keyof typeof colorPalette>('primary');
	const actualTheme = colorPalette[themeName];

	return (
		<div style={{ display: 'flex' }}>
			<ThemeExample className={actualTheme} />
			<ThemePicker
				onChange={(theme) => setTheme(theme)}
				themes={Object.keys(colorPalette)} />
		</div>
	);
}


export function ThemeExample({ className }: { className: string }) {
	return (
		<div className={className + ' ' + styles.themeExample}>
			<div className={styles.bg}>
				<div className={styles.accentText}>accent text</div>
				<div>some regular text</div>
				<button className={styles.btn}>accent colored box</button>
			</div>
			
			<br/>
			
			<div className={styles.shadowed}>
				shadow
			</div>
		</div>
	);
}

export function ThemePicker({ onChange, themes }: { onChange: (key: any) => void; themes: any[] }) {
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
