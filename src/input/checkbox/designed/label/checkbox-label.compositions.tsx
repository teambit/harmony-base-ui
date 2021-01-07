import React, { useState } from 'react';
import { CheckboxLabel } from './checkbox-label';

export function Checked() {
	return <CheckboxLabel defaultChecked> Checkmarbox with a label</CheckboxLabel>;
}

export function Unchecked() {
	return <CheckboxLabel> Check mark box with a label</CheckboxLabel>;
}

export function ControlledCheckmarkBox() {
	const [state, setState] = useState(false);

	return (
		<div>
			<CheckboxLabel onInputChanged={(e) => setState(e.target.checked)} checked={state}>
				{' '}
				Check mark box with a label
			</CheckboxLabel>
			<div>
				→ {state ? 'checked' : 'unchecked'}
			</div>
		</div>
	);
}

export function DisabledCheckmarkBox() {
	return (
		<div>
			<CheckboxLabel disabled>
				<span> disabled</span>
			</CheckboxLabel>
		</div>
	);
}

export function DisabledAndChecked() {
	return (
		<div>
			<CheckboxLabel disabled defaultChecked>
				<span> disabled and checked </span>
			</CheckboxLabel>
		</div>
	);
}
