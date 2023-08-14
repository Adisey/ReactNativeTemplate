import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { useColorThemeStyles } from '../../hooks';
import { TextStyles } from '../../Styles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ children, title }: SectionProps): JSX.Element {
  const Styles = useColorThemeStyles();
  return (
    <View style={TextStyles.sectionContainer}>
      <Text style={[Styles, TextStyles.sectionTitle]}>{title}</Text>
      <Text style={[Styles, TextStyles.sectionDescription]}>{children}</Text>
    </View>
  );
}
