import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { BaseLink, BaseLinkWithExternal } from './link.composition';

describe('Link Component', () => {
	it('should render correctly', () => {
		const { getByText } = render(<BaseLink />);
		const rendered = getByText('bit.dev');
		expect(rendered).to.exist;
	});
	it('should render with target blank', () => {
		const { getByTestId } = render(<BaseLinkWithExternal />);
		const rendered = getByTestId('test-link');

		expect(rendered.tagName).to.equal('A');
		expect(rendered.getAttribute('target')).to.equal('_blank');
	});
});
