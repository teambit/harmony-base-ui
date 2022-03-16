import React from 'react';
import { render } from '@testing-library/react';

import { ErrorMessage } from './error.composition';

describe('Error Component', () => {
	it('should render correctly with children', () => {
		const { getByText } = render(<ErrorMessage />);
		const rendered = getByText('error message!');
		expect(rendered).toBeInstanceOf(HTMLElement);
	});
});
