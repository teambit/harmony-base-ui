import React from 'react';
import { render } from '@testing-library/react';
import { BasicDotsLoader } from './dots-loader.composition';

describe('Dots loader', () => {
	it('should render correctly', () => {
		render(<BasicDotsLoader />);
	});
});
