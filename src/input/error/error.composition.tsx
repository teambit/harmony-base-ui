import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { Error } from './error';

export const ErrorMessage = () => (
	<Theme>
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Error>error message!</Error>
		</div>
	</Theme>
);
