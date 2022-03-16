import React, { useState } from 'react';
import { Drawer } from './drawer';
import { Containee } from '@teambit/base-ui.surfaces.abs-container';

const frameStyle = { border: '1px solid gray', borderRadius: 5, padding: 2 };

export const Controlled = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div style={{ padding: 30 }}>
			<Drawer
				open={isOpen}
				onChange={(event, open: boolean) => setIsOpen(open)}
				placeholder="pre-opened"
				style={frameStyle}
			>
				<Containee style={frameStyle}>menu</Containee>
			</Drawer>
		</div>
	);
};

export const UsingMargin = () => {
	const [margin, setMargin] = useState(16);
	const [indent, setIndent] = useState(16);

	return (
		<div style={{ padding: 30 }}>
			<div>
				Margin
				<input
					type="range"
					min="0"
					max="40"
					value={margin}
					onChange={(e) => {
						setMargin(+e.target.value);
					}}
				/>
			</div>
			<div>
				Indent
				<input
					type="range"
					min="0"
					max="40"
					value={indent}
					onChange={(e) => {
						setIndent(+e.target.value);
					}}
				/>
			</div>

			<br />

			<Drawer
				open={true}
				placeholder={`Margin ${margin}, indent ${indent}`}
				margin={margin}
				indent={indent}
				style={frameStyle}
			>
				<Containee position="bottom-start" style={frameStyle}>
					menu
				</Containee>
			</Drawer>
		</div>
	);
};

export const Uncontrolled = () => {
	return (
		<div style={{ padding: 30 }}>
			<Drawer placeholder="click me!" style={frameStyle}>
				<Containee style={frameStyle}>menu</Containee>
			</Drawer>
		</div>
	);
};

export const ClickOutsideDisabled = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div style={{ padding: 30 }}>
			<Drawer
				open={isOpen}
				onChange={(event, open: boolean) => setIsOpen(open)}
				clickOutside={false}
				placeholder="no click outside"
				style={{ border: '1px solid gray', borderRadius: 5, padding: 4 }}
			>
				<Containee>menu</Containee>
			</Drawer>
		</div>
	);
};
