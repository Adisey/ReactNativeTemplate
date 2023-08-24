import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainBottomNavigationProp } from '../../Navigation';
import { Section } from '../Section/Section';

export const CheckAppPermissions: React.FC = () => {
  const navigation = useNavigation<MainBottomNavigationProp>();
  const goToSettings = () => {
    navigation.navigate('Setting');
  };
  return (
    <Section
      title="Check App Permissions"
      materialCommunityIconsName={'cellphone-lock'}>
      <Button title={'Settings'} onPress={goToSettings} />
    </Section>
  );
};
