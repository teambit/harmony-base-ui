import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Separator } from '@teambit/documenter.ui.separator';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Error } from './error';

export default function Overview() {
	return (
		<ThemeContext>
			<Section>
				<H3>Overview</H3>
				<Paragraph>
					Shows an error message. Avoids rendering when prop `children` is empty.
					<br />
					Uses error color from css variable `--error-color`.
				</Paragraph>
				<Separator />
			</Section>
		</ThemeContext>
	);
}

Overview.abstract = 'error message.';

Overview.labels = ['react', 'typescript', 'error'];

Overview.examples = [
	{
		scope: {
			Error,
		},
		title: 'Error',
		description: 'Error message',
		jsx: <Error>error message!</Error>,
	},
];
