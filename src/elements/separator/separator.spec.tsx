import React from 'react';
import { render } from '@testing-library/react';

import {
	HorizontalSeparatorByDefault,
	SetSeparatorToBeVertical,
} from './separator.composition';

describe('Separator Component', () => {
	it('should render', () => {
		const { getByTestId } = render(<HorizontalSeparatorByDefault data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered).toBeInstanceOf(HTMLElement);
	});
	it('should pass classname', () => {
		const { getByTestId } = render(
			<HorizontalSeparatorByDefault data-testid="test-sep" className="separata" />
		);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).toContain('separata');
	});
	it('should be horizontal by default', () => {
		const { getByTestId } = render(<HorizontalSeparatorByDefault data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).toContain('horizontal');
	});
	it('should be vertical when set', () => {
		const { getByTestId } = render(<SetSeparatorToBeVertical data-testid="test-sep" />);
		const rendered = getByTestId('test-sep');

		expect(rendered.className).toContain('vertical');
	});
});
