import React from 'react';
import Button from './button';

export const BasicButton = () => (
	<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<Button onClick={() => alert('on click')}>Click</Button>
	</div>
);
