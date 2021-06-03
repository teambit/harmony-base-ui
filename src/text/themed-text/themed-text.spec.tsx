import React from 'react';
import { render } from '@testing-library/react';
import { ThemedTextExample, UsingThemedTextClassName } from './themed-text.composition';

it('should render correctly', () => {
	const { getByText } = render(<ThemedTextExample />);
	const rendered = getByText('text');
	expect(rendered).toBeInstanceOf(HTMLElement);
});

it('should render correctly using class name', () => {
	const { getByText } = render(<UsingThemedTextClassName />);
	const rendered = getByText('text');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
