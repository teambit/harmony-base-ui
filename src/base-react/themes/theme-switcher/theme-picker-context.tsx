import { createContext, ComponentType, useContext } from 'react';
// import type { BaseThemeProps } from '@teambit/design.themes.base-theme';

export type ThemeOption<ExtraProps = {}> = ComponentType<ExtraProps> & {
  /**
   * icon of the theme.
   */
  Icon?: ComponentType<{ className: string; onClick: () => void }>;

  /**
   * name of the theme.
   */
  themeName?: string;
};

export type ThemePicker<ExtraProps = {}> = {
  /**
   * current theme in use.
   */
  current?: ThemeOption<ExtraProps>;

  currentIdx: number;

  /**
   * theme options.
   */
  options: ThemeOption<ExtraProps>[];

  /**
   * set a theme.
   */
  setTheme: (option: ThemeOption<ExtraProps>) => void;
};

export const ThemePickerContext = createContext<ThemePicker<any> | undefined>(undefined);

export function useThemePicker() {
  return useContext(ThemePickerContext);
}
