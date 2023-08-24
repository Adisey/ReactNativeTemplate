import React, { PropsWithChildren, ReactNode } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { useColorThemeStyles } from '../../hooks';
import { SectionStyles } from '../../Styles';

export type ISectionProps = PropsWithChildren<{
  children?: string | number | ReactNode;
  materialCommunityIconsName?: string;
  style?: StyleProp<ViewStyle>;
  title?: string;
}>;
export function Section({
  children,
  materialCommunityIconsName,
  style,
  title,
}: ISectionProps): JSX.Element {
  const Styles = useColorThemeStyles();

  return (
    <View style={[SectionStyles.sectionContainer, style]}>
      {title ? (
        <View style={[Styles, SectionStyles.sectionTitleContainer]}>
          {materialCommunityIconsName ? (
            <MaterialCommunityIcons
              style={[Styles, SectionStyles.sectionTitleIcon]}
              name={materialCommunityIconsName}
            />
          ) : null}
          <Text style={[Styles, SectionStyles.sectionTitle]}>{title}</Text>
        </View>
      ) : null}
      <View style={[Styles, SectionStyles.sectionDescriptionContainer]}>
        {typeof children === 'string' || typeof children === 'number' ? (
          <Text style={[Styles, SectionStyles.sectionDescription]}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </View>
  );
}
