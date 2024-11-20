import React from 'react';
import {Text, View, SafeAreaView, useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function WalletPage(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={baseContainer}>
      <View>
        <Text>Wallet</Text>
      </View>
    </SafeAreaView>
  );
}
