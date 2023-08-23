import { useNavigationState } from '@react-navigation/native';

export const useIsActiveScreen = (screen: string): boolean => {
  return useNavigationState(state => {
    const { index, routeNames } = state;
    return screen === routeNames[index];
  });
};
