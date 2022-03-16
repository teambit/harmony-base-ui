import React from 'react';
import { render } from '@testing-library/react';

import {
	H1DefaultHeading,
	H2Heading,
	H3Heading,
	H4Heading,
	H5Heading,
	H6Heading,
} from './heading.composition';

it('should render correct text in Heading', () => {
	const { getByText } = render(<H1DefaultHeading />);
	const rendered = getByText('H1 Heading');
	expect(rendered).toBeInstanceOf(HTMLElement);
});

it('should render as h1 by default', () => {
	const { getByText } = render(<H1DefaultHeading />);
	const rendered = getByText('H1 Heading');
	expect(rendered.tagName).toEqual('H1');
});

it('should render as h2 when defined', () => {
	const { getByText } = render(<H2Heading />);
	const rendered = getByText('H2 Heading');
	expect(rendered.tagName).toEqual('H2');
});

it('should render as h3 when defined', () => {
	const { getByText } = render(<H3Heading />);
	const rendered = getByText('H3 Heading');
	expect(rendered.tagName).toEqual('H3');
});

it('should render as h4 when defined', () => {
	const { getByText } = render(<H4Heading />);
	const rendered = getByText('H4 Heading');
	expect(rendered.tagName).toEqual('H4');
});

it('should render as h5 when defined', () => {
	const { getByText } = render(<H5Heading />);
	const rendered = getByText('H5 Heading');
	expect(rendered.tagName).toEqual('H5');
});

it('should render as h6 when defined', () => {
	const { getByText } = render(<H6Heading />);
	const rendered = getByText('H6 Heading');
	expect(rendered.tagName).toEqual('H6');
});
