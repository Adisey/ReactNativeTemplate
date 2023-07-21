import React from 'react';
import { Button, SafeAreaView, ScrollView, View } from 'react-native';
import { CustomStatusBar, Section } from './Components';
import { useColorThemeStyles } from './hooks';

function App(): Element {
  const Styles = useColorThemeStyles();

  const handlerButtonPress = () => {
    console.log(new Date().toISOString(), '-(Button onPress)->', `<--`);
  };

  console.log(new Date().toISOString(), '-(RENDER)->', `<--`);
  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="START">Hello ARTEM !</Section>
          <Button title={'Button+Log'} onPress={handlerButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
