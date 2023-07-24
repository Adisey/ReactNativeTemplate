import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useColorThemeStyles } from '../hooks';
import { CustomStatusBar, Section } from '../Components';

export const Page3: React.FC = () => {
  const Styles = useColorThemeStyles();
  console.log(new Date().toISOString(), '-(RENDER)-Page3->', Platform.OS);

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Page 3">
            <Text>Page 3</Text>
          </Section>
        </View>
        <Button
          title={'goBack'}
          // onPress={goBack}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
