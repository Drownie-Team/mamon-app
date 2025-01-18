import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Context
import {GlobalContextProvider} from './src/common';

// Pages
import MainPage from './src/pages/main_page';

const Stack = createNativeStackNavigator();

// Setting Const
const DEFAULT_STACK_OPTION: NativeStackNavigationOptions = {
  headerShown: false,
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GlobalContextProvider >
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen name="main" component={MainPage} options={DEFAULT_STACK_OPTION} />
        </Stack.Navigator>
      </GlobalContextProvider>
    </NavigationContainer>
  );
}

export default App;
