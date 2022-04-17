import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicThemeSwitcher } from './theme-switcher.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThemeSwitcher />);
  expect(getByText('hello world!')).toBeInTheDocument();
});

it('should switch themes using the toggler context', () => {
  const { getByText } = render(<BasicThemeSwitcher />);
  expect(getByText('themeA')).toBeInTheDocument();

  fireEvent.click(getByText('click here apply next theme'));

  expect(getByText('themeB')).toBeInTheDocument();
});

it('should keep same theme, even when switching using context, when controlled', () => {
  const { getByText } = render(<BasicThemeSwitcher activeTheme="theme-a" />);
  expect(getByText('themeA')).toBeInTheDocument();

  fireEvent.click(getByText('click here apply next theme'));

  expect(getByText('themeA')).toBeInTheDocument();
});

it('should render theme when set explicitly', () => {
  const { getByText, rerender } = render(<BasicThemeSwitcher activeTheme={'theme-b'} />);
  const rendered = getByText('themeB');
  expect(rendered).toBeTruthy();

  rerender(<BasicThemeSwitcher activeTheme={'theme-a'} />);
  const renderedSecond = getByText('themeA');
  expect(renderedSecond).toBeTruthy();
});

it('should pick initial theme when uncontrolled', () => {
  const { getByText, rerender } = render(<BasicThemeSwitcher defaultTheme={'theme-b'} />);
  const rendered = getByText('themeB');
  expect(rendered).toBeTruthy();

  rerender(<BasicThemeSwitcher activeTheme={'theme-a'} />);
  const renderedSecond = getByText('themeA');
  expect(renderedSecond).toBeTruthy();
});
