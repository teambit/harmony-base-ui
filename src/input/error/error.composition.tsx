import React from 'react';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Error } from './error';

export const ErrorMessage = () => (
	<ThemeContext>
		<Error>error message!</Error>
	</ThemeContext>
);
