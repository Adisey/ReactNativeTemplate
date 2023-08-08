import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useUiStore } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { setColorTheme } from '../middleware';
import { CustomStatusBar, Section } from '../Components';

export const ColorTheme: React.FC = () => {
  const Styles = useColorThemeStyles();
  const { colorTheme } = useUiStore();

  const [number, onChangeNumber] = useState('');

  const setColor = () => {
    setColorTheme(number);
  };

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="0-default, 1-Light, 2-Dark"
            keyboardType="numeric"
          />
          <Button title={'Save'} onPress={setColor} />

          <Section title="Current">
            <Text>{colorTheme}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
