import React, { useEffect } from 'react';
import {Text, View, SafeAreaView, useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function PlanningScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    console.log('RENDER Planning SCREEN');
  }, []);

  return (
    <SafeAreaView style={baseContainer}>
      <View>
        <Text>Wallet</Text>
      </View>
    </SafeAreaView>
  );
}

export default PlanningScreen;
