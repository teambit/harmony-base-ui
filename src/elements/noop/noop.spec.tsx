import React from 'react';
import { render } from '@testing-library/react';

import { Noop } from './noop';

const snapshot = `
<div
  id="container"
>
  paka paka
</div>
`;

it('should render children transparently', () => {
	const { getByText } = render(
		<div id="container">
			<Noop>paka paka</Noop>
		</div>
	);

	const rendered = getByText('paka paka');

	expect(rendered).toMatchInlineSnapshot(snapshot);
});
