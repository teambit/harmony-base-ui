import { createContext, ComponentType, useContext, useCallback } from 'react';

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

export function useThemeByName(themeName?: string) {
  const themes = useThemePicker();
  if (!themeName || !themes) return undefined;

  return themes.options.find((theme) => theme.themeName === themeName);
}

export function useNextTheme() {
  const themes = useThemePicker();

  return useCallback(() => {
    if (!themes) return;
    const { options, setTheme, currentIdx } = themes;

    const nextIdx = (currentIdx + 1) % options.length;
    const next = options[nextIdx];
    setTheme(next);
  }, [themes]);
}
