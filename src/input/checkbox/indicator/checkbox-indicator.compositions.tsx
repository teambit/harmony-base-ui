import React from 'react';
import { CheckboxIndicator, classes } from './checkbox-indicator';

export const Checked = () => {
	return (
		<div>
			<input type="checkbox" defaultChecked /> → <CheckboxIndicator />
		</div>
	);
};

export const Unchecked = () => {
	return (
		<div>
			<input type="checkbox" /> → <CheckboxIndicator />
		</div>
	);
};

export const Disabled = () => {
	return (
		<div>
			<input type="checkbox" defaultChecked disabled /> → <CheckboxIndicator />
		</div>
	);
};
