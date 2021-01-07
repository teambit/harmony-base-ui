import React from 'react';
import { Link } from './link';

const Center = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			{children}
		</div>
	);
};

export const BaseLink = () => (
	<Center>
		<Link href="https://bit.dev">bit.dev</Link>
	</Center>
);

export const BaseLinkWithExternal = () => (
	<Center>
		<Link href="https://bit.dev" external={true} data-testid="test-link">
			bit.dev
		</Link>
	</Center>
);
