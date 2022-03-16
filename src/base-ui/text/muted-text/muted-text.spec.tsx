import React from 'react';
import { render } from '@testing-library/react';

import { MutedTextExample, UsingMutedTextClassName } from './muted-text.composition';

it('should render correctly', () => {
	const { getByText } = render(<MutedTextExample />);
	const rendered = getByText('Muted text');
	expect(rendered).toBeInstanceOf(HTMLElement);
});

it('should render correctly using class name', () => {
	const { getByText } = render(<UsingMutedTextClassName />);
	const rendered = getByText('Muted text with class name');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
