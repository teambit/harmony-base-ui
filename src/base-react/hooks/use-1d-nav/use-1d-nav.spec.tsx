import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicUsage } from './use-1d-nav.composition';

it('should go to second item, when clicking down', () => {
  const { getByText, getByTitle } = render(<BasicUsage />);

  const arrowDown = getByText('⬇️');

  fireEvent.click(arrowDown);

  const active = getByTitle('active');

  expect(active).toHaveTextContent('2');
});

it('should go to second item, when pressing keydown', () => {
  const { getByPlaceholderText, getByTitle } = render(<BasicUsage />);

  const arrowDown = getByPlaceholderText('keyboard nav here');

  fireEvent.keyDown(arrowDown, { key: 'ArrowDown', code: 'Enter', charCode: 40, keyCode: 40 });

  const active = getByTitle('active');

  expect(active).toHaveTextContent('2');
});

it('should go up, when pressing keyup', () => {
  const { getByPlaceholderText, getByTitle } = render(<BasicUsage />);

  const arrowDown = getByPlaceholderText('keyboard nav here');

  fireEvent.keyDown(arrowDown, { key: 'ArrowDown' }); // got to 2
  fireEvent.keyDown(arrowDown, { key: 'ArrowDown' }); // got to 3
  fireEvent.keyDown(arrowDown, { key: 'ArrowDown' }); // got to 4
  fireEvent.keyDown(arrowDown, { key: 'ArrowUp' });  // got to 3

  const active = getByTitle('active');

  expect(active).toHaveTextContent('3');
});

it('should not overflow top, when at the start', () => {
  const { getByText, getByTitle } = render(<BasicUsage />);

  const arrowDown = getByText('⬆️');

  fireEvent.click(arrowDown);

  const active = getByTitle('active');

  expect(active).toHaveTextContent('1');
});

it('should not overflow top, when at the bottom', () => {
  const { getByText, getByTitle } = render(<BasicUsage />);

  const arrowDown = getByText('⬇️');

  fireEvent.click(arrowDown); // go to 2
  fireEvent.click(arrowDown); // go to 3
  fireEvent.click(arrowDown); // go to 4
  fireEvent.click(arrowDown); // stay at 4

  const active = getByTitle('active');

  expect(active).toHaveTextContent('4');
});
