import { create } from 'zustand';

export enum ColorTheme {
  DEFAULT = 0,
  LIGHT = 1,
  DARK = 2,
}

interface IUiState {
  colorTheme: ColorTheme;
}
interface IUiSetState {
  setStoreColorTheme: (theme: ColorTheme) => void;
}

export const useUiStore = create<IUiState & IUiSetState>()(set => ({
  colorTheme: 0,
  setStoreColorTheme: (theme: ColorTheme) =>
    set((state: IUiState) => ({ ...state, colorTheme: theme })),
}));
