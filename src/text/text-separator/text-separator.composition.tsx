import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { TextSeparator } from './text-separator';

export const TextSeparatorExample = () => (
	<Theme>
		<div style={{ minWidth: 200 }}>
			<TextSeparator>text</TextSeparator>
		</div>
	</Theme>
);
