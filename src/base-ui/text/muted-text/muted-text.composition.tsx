import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { MutedText, mutedText } from './muted-text';

export const MutedTextExample = () => (
	<Theme>
		<MutedText>Muted text</MutedText>
	</Theme>
);

export const UsingMutedTextClassName = () => (
	<Theme>
		<span className={mutedText}>Muted text with class name</span>
	</Theme>
);
