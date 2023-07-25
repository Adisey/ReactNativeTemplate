import { useAuthStore } from '../stores';

export const setAuth = (isAuth: boolean) => {
  console.log(new Date().toISOString(), '-(MW setAuth)->', isAuth, `<--`);
  useAuthStore.setState({ isAuth });
};
