import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { ErrorMessage } from './error.composition';

describe('Error Component', () => {
	it('should render correctly with children', () => {
		const { getByText } = render(<ErrorMessage />);
		const rendered = getByText('error message!');
		expect(rendered).to.exist;
	});
});
