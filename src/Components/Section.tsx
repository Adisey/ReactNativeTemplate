import { Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { TextStyles } from '../Styles';
import { useColorThemeStyles } from '../hooks';

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
