import React from 'react';
import { View } from 'react-native';
import { Image } from '@rneui/base';
import { useColorThemeStyles } from '../../hooks';
import { LogoStyles } from './Logo.style';

export const Logo: React.FC = () => {
  const Styles = useColorThemeStyles();

  return (
    <View style={[Styles, LogoStyles.container]}>
      <Image
        style={LogoStyles.img}
        source={require('../../static/img/logo.png')}
      />
    </View>
  );
};
