import { create } from 'zustand';
import { IColorTheme, IColorThemeTypes } from '../interfaces/colorTheme';

interface IUiState {
  colorTheme: IColorTheme;
}
interface IUiActionsState {
  setStoreColorTheme: (theme: IColorThemeTypes) => void;
}

export const useUiStore = create<IUiState & IUiActionsState>()(set => ({
  colorTheme: IColorTheme.DEFAULT,
  setStoreColorTheme: (theme: IColorThemeTypes) =>
    set((state: IUiState) => ({ ...state, colorTheme: IColorTheme[theme] })),
}));
