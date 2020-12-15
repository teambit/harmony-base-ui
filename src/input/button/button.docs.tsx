import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Separator } from '@teambit/documenter.ui.separator';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import Button from './button';

export default function Overview() {
	return (
		<ThemeContext>
			<Section>
				<H3>Overview</H3>
				<Paragraph>
					Base button, with very basic styles. Accepts all parameters of native html
					button.
				</Paragraph>
				<Separator />
			</Section>
		</ThemeContext>
	);
}

Overview.abstract = 'base button.';

Overview.labels = ['react', 'typescript', 'input', 'button'];

Overview.examples = [
	{
		scope: {
			Button,
		},
		title: 'Basic button',
		description: '',
		jsx: <Button>Click</Button>,
	},
	{
		scope: {
			Button,
		},
		title: 'Basic button with on click',
		description: '',
		jsx: <Button onClick={() => alert('on click')}>Click</Button>,
	},
];
