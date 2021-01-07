import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import {
	HorizontalSeparatorByDefault,
	SetSeparatorToBeVertical,
} from './separator.composition';

describe('Separator Component', () => {
	it('should render', () => {
		const { getByTestId } = render(<HorizontalSeparatorByDefault data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered).to.exist;
	});
	it('should pass classname', () => {
		const { getByTestId } = render(
			<HorizontalSeparatorByDefault data-testid="test-sep" className="separata" />
		);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).to.include('separata');
	});
	it('should be horizontal by default', () => {
		const { getByTestId } = render(<HorizontalSeparatorByDefault data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).to.include('horizontal');
	});
	it('should be vertical when set', () => {
		const { getByTestId } = render(<SetSeparatorToBeVertical data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).to.include('vertical');
	});
});
