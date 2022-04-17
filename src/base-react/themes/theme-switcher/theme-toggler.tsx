import React, { ButtonHTMLAttributes } from 'react';
import { useNextTheme as useThemeIncrementor, useThemePicker } from './theme-picker-context';

type ThemeTogglerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ThemeToggler({ onClick, ...props }: ThemeTogglerProps) {
  const applyNextTheme = useThemeIncrementor();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    applyNextTheme();
  };

  return <button {...props} onClick={handleClick} />;
}
