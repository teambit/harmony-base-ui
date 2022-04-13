import React, { ReactNode, useState } from 'react';

import { ThemeOption, ThemePicker, ThemePickerContext } from './theme-picker-context';

export type ThemeSwitcherProps<ExtraProps = {}> = ExtraProps & {
  children?: ReactNode;
  /** list of themes to toggle through */
  themes: ThemeOption<ExtraProps>[];
  /** explicit active theme. */
  activeTheme?: string;
  /** handle theme changes (i.e from context) */
  handleThemeChange?: () => boolean;
  /** display name of the initial theme to use */
  defaultTheme?: string;
};

// (*) 'theme' is as object based on ComponentType, which may be a function ("function component")
// this confuses react's state, as it can accept functions (e.g. setState(x=>x+1) )
// setting it through a function resolves this

export function ThemeSwitcher<ExtraProps = {}>({
  children,
  themes,
  activeTheme,
  handleThemeChange,
  defaultTheme = activeTheme,
  ...props
}: ThemeSwitcherProps<ExtraProps>) {
  const explicitValue = activeTheme && themes.find((x) => x.themeName === activeTheme);
  const getInitialOption = () => (defaultTheme && themes.find((x) => x.themeName === defaultTheme)) || themes[0];

  // workaround (*)
  const [theme, setTheme] = useState<ThemeOption<ExtraProps>>(getInitialOption);

  const currentTheme = explicitValue || theme;

  const picker: ThemePicker<ExtraProps> = {
    setTheme: (themeTarget) => {
      handleThemeChange?.();
      // workaround (*)
      setTheme(() => themeTarget);
    },
    current: currentTheme,
    get currentIdx() {
      return this.current ? this.options.indexOf(this.current) : -1;
    },
    options: themes,
  };

  const Provider = currentTheme;
  // @ts-ignore
  const forwardProps = props as ExtraProps;

  return (
    <ThemePickerContext.Provider value={picker}>
      {Provider ? <Provider {...forwardProps}>{children}</Provider> : children}
    </ThemePickerContext.Provider>
  );
}
