import React from 'react';
import { render } from '@testing-library/react';

import { LabelWithText, LabelWithCustomBackgroundColor } from './label.composition';

it('should render correct text in Label', () => {
	const { getByText } = render(<LabelWithText />);
	const rendered = getByText('label');
	expect(rendered).toBeInstanceOf(HTMLElement);
});

it('should apply background color', () => {
	const { getByText } = render(<LabelWithCustomBackgroundColor />);
	const rendered = getByText('label');

	const styles = window.getComputedStyle(rendered);

	expect(styles.background).toEqual('blue');
});
