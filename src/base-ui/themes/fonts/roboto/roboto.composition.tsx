import React from 'react';
import { Roboto } from './roboto';

export const RobotoMonoFont = () => (
	<div style={{ fontFamily: 'Roboto Mono' }}>
		<Roboto />
		<span>This is a simple text.</span>
	</div>
);

export const WithoutFont = () => (
	<div>
		<span>This is a simple text.</span>
	</div>
);
