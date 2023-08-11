export enum IColorTheme {
  DEFAULT = 'default',
  DARK = 'Dark',
  LIGHT = 'Light',
}

export type IColorThemeTypes = keyof typeof IColorTheme;
