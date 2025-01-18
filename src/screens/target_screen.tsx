import React, { useEffect } from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function TargetScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    console.log('RENDER TROPHY SCREEN');
  }, []);

  return (
    <SafeAreaView style={baseContainer}>
      <View>
        <Text>Thropy</Text>
      </View>
    </SafeAreaView>
  );
}

export default TargetScreen;
