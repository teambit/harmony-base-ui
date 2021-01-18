import React from 'react';
import { CheckboxIndicator } from './checkbox-indicator';

export function Checked() {
	return (
		<div>
			{/* icon font.. */}
			<input type="checkbox" defaultChecked /> → <CheckboxIndicator />
		</div>
	);
}

export function Unchecked() {
	return (
		<div>
			{/* icon font.. */}
			<input type="checkbox" /> → <CheckboxIndicator />
		</div>
	);
}

export function DisabledChecked() {
	return (
		<div>
			{/* icon font.. */}
			<input type="checkbox" disabled defaultChecked /> → <CheckboxIndicator />
		</div>
	);
}

export function Disabled() {
	return (
		<div>
			{/* icon font.. */}
			<input type="checkbox" disabled /> → <CheckboxIndicator />
		</div>
	);
}
