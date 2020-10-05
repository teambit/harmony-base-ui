import React, { useState } from 'react';
import { Drawer } from './drawer';
import { Containee } from '@teambit/base-ui.surfaces.abs-container';

export const Uncontrolled = () => {
	return (
		<div style={{ padding: 30 }}>
			<Drawer placeholder="click me!">
				<Containee>menu</Containee>
			</Drawer>
		</div>
	);
};

export const Controlled = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div style={{ padding: 30 }}>
			<Drawer
				open={isOpen}
				onChange={(event, open: boolean) => setIsOpen(open)}
				placeholder="pre-opened"
			>
				<Containee>menu</Containee>
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
