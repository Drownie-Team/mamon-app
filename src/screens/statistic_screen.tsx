import React, { useEffect } from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function StatisticScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    console.log('RENDER STATIC SCREEN');
  }, []);

  return (
    <SafeAreaView style={baseContainer}>
      <View>
        <Text>Statistic</Text>
      </View>
    </SafeAreaView>
  );
}

export default StatisticScreen;
