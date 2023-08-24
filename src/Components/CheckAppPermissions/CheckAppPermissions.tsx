import React, { ReactNode } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainBottomNavigationProp } from '../../Navigation';
import { ISectionProps, Section } from '../Section/Section';

interface ICheckAppPermissionsProps extends ISectionProps {
  children?: ReactNode;
}

export const CheckAppPermissions: React.FC<ICheckAppPermissionsProps> = ({
  children,
  materialCommunityIconsName,
  style,
  title,
}: ICheckAppPermissionsProps) => {
  const navigation = useNavigation<MainBottomNavigationProp>();
  const goToSettings = () => {
    navigation.navigate('Setting');
  };
  return (
    <Section
      title={title || 'Check App Permissions'}
      materialCommunityIconsName={
        materialCommunityIconsName || 'cellphone-lock'
      }
      style={style}>
      {children}
      <Button title={'Settings'} onPress={goToSettings} />
    </Section>
  );
};
