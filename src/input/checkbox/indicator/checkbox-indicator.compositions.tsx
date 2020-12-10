import React from 'react';
import { CheckboxIndicator, classes } from './checkbox-indicator';

export const Preview = () => {
	return (
		<div>
			<input type="checkbox" /> --{'> '}
			<CheckboxIndicator className={classes.defaultCheckbox} />
		</div>
	);
};
