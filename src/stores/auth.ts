import { create } from 'zustand';

interface IAuthState {
  isAuth: boolean;
  // setAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<IAuthState>()(() => ({
  isAuth: false,
  // setAuth: isA => set(state => ({ isAuth: isA })),
}));
