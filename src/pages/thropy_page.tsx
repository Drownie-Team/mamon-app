import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function ThropyPage(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={baseContainer}>
      <View>
        <Text>Thropy</Text>
      </View>
    </SafeAreaView>
  );
}
