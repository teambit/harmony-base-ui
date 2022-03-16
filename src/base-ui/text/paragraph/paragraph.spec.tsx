import React from 'react';
import { render } from '@testing-library/react';

import {
	Pelement,
	PelementWithDifferentSize,
	DivElement,
	SpanElement,
} from './paragraph.composition';

it('should render p element', () => {
	const { getByText } = render(<Pelement />);
	const rendered = getByText('p element');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render p element with different size', () => {
	const { getByText } = render(<PelementWithDifferentSize />);
	const rendered = getByText('p element with xl size');
	expect(rendered.className).toContain('xl');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render div element', () => {
	const { getByText } = render(<DivElement />);
	const rendered = getByText('div element');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render span element', () => {
	const { getByText } = render(<SpanElement />);
	const rendered = getByText('span element');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
