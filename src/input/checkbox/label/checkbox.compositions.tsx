import { HiddenCheckbox } from '@teambit/base-ui.input.checkbox.hidden';
import React, { useState } from 'react';
import { CheckboxLabel } from './checkbox-label';

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

export function CustomInput() {
	const [state, setState] = useState(false);
	return (
		<div>
			<CheckboxLabel
				input={
					<HiddenCheckbox
						onChange={(e) => setState(e.target.checked)}
						checked={state}
						alt="custom checkbox"
					/>
				}
			>
				{' '}
				Checkmarbox with a label
			</CheckboxLabel>
			<div>
				-{'>'} {state ? 'checked' : 'unchecked'}
			</div>
		</div>
	);
}
