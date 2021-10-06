import React from 'react';
import { render } from '@testing-library/react';
import { BasicDuration, WithHours } from './duration.compositions';

describe('Duration', () => {
  it('should render the duration as text', async () => {
    const { findByText } = render(<BasicDuration />);
    const element = await findByText('00:00:02');
    expect(element).toBeTruthy();
  });

  it('should render the duration with hours', async () => {
    const { findByText } = render(<WithHours />);
    const element = await findByText('240:00:00');
    expect(element).toBeTruthy();    
  });
});
