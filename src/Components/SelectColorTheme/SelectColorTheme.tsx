import { Text, View } from 'react-native';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Button } from '@rneui/themed';
import { IColorTheme } from '../../interfaces/colorTheme';
import { useUiStore } from '../../stores';
import { useColorThemeStyles } from '../../hooks';
import { setColorTheme } from '../../middleware';
import { ColorThemeButtonStyles } from '../../Styles';
import { Section } from '../Section/Section';

export const SelectColorTheme: React.FC = () => {
  const Styles = useColorThemeStyles();
  const { colorTheme } = useUiStore();

  const isDefault = colorTheme === IColorTheme.DEFAULT;
  const isDark = colorTheme === IColorTheme.DARK;
  const isLight = colorTheme === IColorTheme.LIGHT;

  return (
    <View style={Styles}>
      <Section
        title="Current Color Theme"
        materialCommunityIconsName={'theme-light-dark'}>
        {colorTheme}
      </Section>
      <View style={ColorThemeButtonStyles.colorThemeView}>
        <Button
          buttonStyle={[
            ColorThemeButtonStyles.colorTheme,
            isDefault ? ColorThemeButtonStyles.colorThemeCurrent : {},
          ]}
          disabled={isDefault}
          onPress={() => setColorTheme('DEFAULT')}>
          <SimpleLineIcons
            name="screen-smartphone"
            style={[
              ColorThemeButtonStyles.buttonText,
              ColorThemeButtonStyles.colorThemeIcon,
              ColorThemeButtonStyles.colorThemeDefaultText,
              isDefault ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}
          />
          <Text
            style={[
              ColorThemeButtonStyles.buttonText,
              ColorThemeButtonStyles.primaryButtonText,
              ColorThemeButtonStyles.colorThemeDefaultText,
              isDefault ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}>
            System
          </Text>
        </Button>
        <Button
          buttonStyle={[
            ColorThemeButtonStyles.colorTheme,
            ColorThemeButtonStyles.colorThemeDark,
            isDark ? ColorThemeButtonStyles.colorThemeCurrent : {},
          ]}
          disabled={isDark}
          onPress={() => setColorTheme('DARK')}>
          <OcticonsIcons
            name="moon"
            style={[
              ColorThemeButtonStyles.colorThemeDarkText,
              ColorThemeButtonStyles.buttonText,
              ColorThemeButtonStyles.colorThemeIcon,
              isDark ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}
          />
          <Text
            style={[
              ColorThemeButtonStyles.colorThemeDarkText,
              ColorThemeButtonStyles.buttonText,
              isDark ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}>
            Dark
          </Text>
        </Button>
        <Button
          buttonStyle={[
            ColorThemeButtonStyles.colorThemeLight,
            ColorThemeButtonStyles.colorTheme,
            isLight ? ColorThemeButtonStyles.colorThemeCurrent : {},
          ]}
          disabled={isLight}
          onPress={() => setColorTheme('LIGHT')}>
          <OcticonsIcons
            name="sun"
            style={[
              ColorThemeButtonStyles.colorThemeLightText,
              ColorThemeButtonStyles.buttonText,
              ColorThemeButtonStyles.colorThemeIcon,
              isLight ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}
          />
          <Text
            style={[
              ColorThemeButtonStyles.colorThemeLightText,
              ColorThemeButtonStyles.buttonText,
              isLight ? ColorThemeButtonStyles.colorThemeCurrentText : {},
            ]}>
            Light
          </Text>
        </Button>
      </View>
    </View>
  );
};
