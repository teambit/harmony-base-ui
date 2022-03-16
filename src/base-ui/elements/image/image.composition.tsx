import React from 'react';
import { BaseImage } from './image';

export const BaseImageExample = () => (
	<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<BaseImage
			data-testid="test-img"
			alt="alt world"
			src="https://static.bit.dev/bit-logo.svg"
		/>
	</div>
);
