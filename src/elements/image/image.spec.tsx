import React from 'react';
import { render } from '@testing-library/react';

import { BaseImage } from './image';
import { BaseImageExample } from './image.composition';

it('should render', () => {
	const { getByTestId } = render(<BaseImageExample />);
	const rendered = getByTestId('test-img');

	expect(rendered.tagName).toEqual('IMG');
	expect(rendered.getAttribute('alt')).toEqual('alt world');
	expect(rendered.getAttribute('src')).toEqual('https://static.bit.dev/bit-logo.svg');
});

it('should pass classname', () => {
	const { getByTestId } = render(
		<BaseImage data-testid="test-img" className="testclass" alt="alt" src="https://" />
	);
	const rendered = getByTestId('test-img');

	expect(rendered.className).toContain('testclass');
});
