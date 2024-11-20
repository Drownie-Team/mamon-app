import React, {useState} from 'react';

import {type NavItem, GlobalContextProvider} from './common';
import {HomePage, StatisticPage, ThropyPage, WalletPage} from './pages';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';

function App(): React.JSX.Element {
  const [navItems, _] = useState<NavItem[]>([
    {
      icon_name: 'house',
      title: 'Home',
      is_active: true,
      component: HomePage,
    },
    {
      icon_name: 'square-poll-vertical',
      title: 'Statistics',
      is_active: false,
      component: StatisticPage,
    },
    {
      icon_name: 'wallet',
      title: 'Wallet',
      is_active: false,
      component: WalletPage,
    },
    {
      icon_name: 'trophy',
      title: 'Target',
      is_active: false,
      component: ThropyPage,
    },
  ]);

  const Tab = createBottomTabNavigator();
  const navByTitle = Object.fromEntries(
    navItems.map(item => [item.title, item])
  );

  return (
    <NavigationContainer>
      <GlobalContextProvider >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (<Icon name={navByTitle[route.name].icon_name} size={size * 0.7} color={color} />),
            tabBarActiveTintColor: '#6541A0',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          {
            navItems.map((navItem, i) => {
              return (
                <Tab.Screen key={i} name={navItem.title} component={navItem.component} />
              );
            })
          }
        </Tab.Navigator>
      </GlobalContextProvider>
    </NavigationContainer>
  );
}

export default App;
