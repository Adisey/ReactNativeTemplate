import { useAuthStore } from '../stores';

export const setAuth = (isAuth: boolean) => useAuthStore.setState({ isAuth });
