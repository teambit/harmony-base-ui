import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { ThemeSwitcher, ThemeSwitcherProps } from './theme-switcher';

export const BasicThemeSwitcher = (props: Partial<ThemeSwitcherProps>) => {
  return (
    <ThemeSwitcher themes={[ThemeA, ThemeB]} {...props}>
      <div>hello world!</div>
      <ThemeToggler>click here apply next theme</ThemeToggler>
    </ThemeSwitcher>
  );
};

function ThemeA({ children }: any) {
  return (
    <div style={{ background: '#fff3b3', padding: 8 }}>
      <div>themeA</div>
      {children}
    </div>
  );
}
ThemeA.themeName = 'theme-a';

function ThemeB({ children }: any) {
  return (
    <div style={{ background: '#B3BFFF', padding: 8 }}>
      <div>themeB</div>
      {children}
    </div>
  );
}
ThemeB.themeName = 'theme-b';
