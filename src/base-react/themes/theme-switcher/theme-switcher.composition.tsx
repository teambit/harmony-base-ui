import React from 'react';
import { useThemePicker } from './theme-picker-context';
import { ThemeSwitcher, ThemeSwitcherProps } from './theme-switcher';

export const BasicThemeSwitcher = (props: Partial<ThemeSwitcherProps>) => {
  return (
    <ThemeSwitcher themes={[ThemeA, ThemeB]} {...props}>
      <div>hello world!</div>
      <Toggler />
    </ThemeSwitcher>
  );
};

function ThemeA({ children }: any) {
  return (
    <div>
      <div>themeA</div>
      {children}
    </div>
  );
}
ThemeA.themeName = 'theme-a';

function ThemeB({ children }: any) {
  return (
    <div>
      <div>themeB</div>
      {children}
    </div>
  );
}
ThemeB.themeName = 'theme-b';

function Toggler() {
  const themes = useThemePicker();
  if (!themes) return null;

  const { options, setTheme, currentIdx } = themes;
  const incrementTheme = () => {
    const nextIdx = (currentIdx + 1) % options.length;
    const next = options[nextIdx];
    setTheme(next);
  };

  return <button onClick={() => incrementTheme()}>change theme</button>;
}
