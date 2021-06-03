import React from 'react';
import { render } from '@testing-library/react';

import { TextSeparatorExample } from './text-separator.composition';

it('should render correctly', () => {
	const { getByText } = render(<TextSeparatorExample />);
	const rendered = getByText('text');
	expect(rendered).toBeInstanceOf(HTMLElement);
});
