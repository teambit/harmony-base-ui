import React, { useState } from 'react';
import { HiddenCheckbox } from './hidden-checkbox';

export const Preview = () => {
	const [active, setActive] = useState(false);
	const [focused, setFocused] = useState(false);

	return (
		<div>
			<HiddenCheckbox
				onChange={(e) => setActive(e.currentTarget.checked)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
			<div>
				{active ? 'checked' : 'unchecked'} {focused ? '· focused' : ''}
			</div>
		</div>
	);
};

export const Checked = () => {
	const [active, setActive] = useState(true);
	const [focused, setFocused] = useState(false);

	return (
		<div>
			<HiddenCheckbox
				defaultChecked={true}
				onChange={(e) => setActive(e.currentTarget.checked)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
			<div>
				{active ? 'checked' : 'unchecked'} {focused ? '· focused' : ''}
			</div>
		</div>
	);
};
