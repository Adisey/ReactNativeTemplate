import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useColorThemeStyles } from '../../hooks';
import { Section } from '../index';

export const Permissions: React.FC = () => {
  const Styles = useColorThemeStyles();

  return (
    <View style={Styles}>
      <Section
        title="Permissions"
        materialCommunityIconsName={'cellphone-lock'}>
        <Text style={[Styles, { marginBottom: 10 }]}>
          {' ds kjdhfkhsdkjfhs'}
        </Text>
      </Section>
    </View>
  );
};
