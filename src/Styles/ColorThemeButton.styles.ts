import { StyleSheet } from 'react-native';

export const ColorThemeButtonStyles = StyleSheet.create({
  buttonText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#FFF',
  },
  colorThemeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 10,
  },
  colorTheme: {
    borderWidth: 1,
    borderStyle: 'solid',
    height: 50,
    borderRadius: 5,
    borderColor: '#888',
  },
  colorThemeCurrent: {
    borderColor: '#ddd',
  },
  colorThemeCurrentText: {
    color: '#FFF',
  },
  colorThemeDefaultText: {
    color: '#FFF',
  },
  colorThemeDark: {
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
  colorThemeDarkText: {
    color: '#FFF',
  },
  colorThemeLight: {
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
  colorThemeLightText: {
    color: '#000',
  },
  colorThemeIcon: {
    fontSize: 25,
  },
});
