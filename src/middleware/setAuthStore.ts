import { Platform } from 'react-native';
import { saveParams } from '../db';
import { useAuthStore } from '../stores';

const saveToken = async (): Promise<void> => {
  await saveParams('tokenAccess', 'XXX');
};
const removeToken = async (): Promise<void> => {
  await saveParams('tokenAccess', '');
};

export const setAuth = (isAuth: boolean): void => {
  useAuthStore.setState({ isAuth });
};

export const setLogin = async () => {
  console.log(new Date().toISOString(), '-(MW setLogin)->', Platform.OS);
  await saveToken();
  setAuth(true);
};

export const setLogOut = async () => {
  console.log(new Date().toISOString(), '-(MW setLogOut)->', `<--`);
  await removeToken();
  setAuth(false);
};
