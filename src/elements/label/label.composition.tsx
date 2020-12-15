import React from 'react';
import { Label } from './label';

const Center = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			{children}
		</div>
	);
};

export const LabelWithText = () => (
	<Center>
		<Label>label</Label>
	</Center>
);

export const LabelWithCustomBackgroundColor = () => (
	<Center>
		<Label color="blue">label</Label>
	</Center>
);
