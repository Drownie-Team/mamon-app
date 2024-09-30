/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  ActionBar,
  BudgetBar,
} from './components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={baseContainer}>
      <View style={styles.baseTop} />
      <View style={styles.baseBottom} />
      <View style={styles.content}>
        <ActionBar />
        <BudgetBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseTop: {
      flex: 2,
      backgroundColor: '#6541A0',
  },
  baseBottom: {
      flex: 8,
      backgroundColor: '#F3F3F3',
  },
  content: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default App;
