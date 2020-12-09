import React, { useState } from 'react';
import { CheckboxLabel } from './checkbox-label';
import { CheckmarkLabel } from './designed/checkbox-label';
import { CheckmarkInputIndicator } from './designed/checkmark-input-indicator';

export function IndicatorMirroringInput() {
	return (
		<div>
			<input type="checkbox" /> --{'> '}
			<CheckmarkInputIndicator />
		</div>
	);
}

export function UncontrolledVanilla() {
	return (
		<div>
			<CheckboxLabel>hello world</CheckboxLabel>
		</div>
	);
}

export function UncontrolledChecked() {
	return (
		<div>
			<CheckboxLabel defaultChecked>hello world</CheckboxLabel>
		</div>
	);
}

export function ControlledCheckmarkBox() {
	const [state, setState] = useState(false);
	return (
		<div>
			<CheckmarkLabel onInputChanged={(e) => setState(e.target.checked)} checked={state}>
				{' '}
				Checkmarbox with a label
			</CheckmarkLabel>
			<div>
				-{'>'} {state ? 'checked' : 'unchecked'}
			</div>
		</div>
	);
}

export function DisabledCheckmarkBox() {
	return (
		<div>
			<CheckmarkLabel disabled>
				<span> disabled checkmarkbox</span>
			</CheckmarkLabel>
		</div>
	);
}

export function DisabledAndChecked() {
	return (
		<div>
			<CheckmarkLabel disabled defaultChecked>
				<span> disabled checkmarkbox</span>
			</CheckmarkLabel>
		</div>
	);
}
