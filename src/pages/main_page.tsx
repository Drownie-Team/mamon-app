import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';

import type { NavItem } from '../common';

// Import Screens
import HomeScreen from '../screens/home_screen';
import StatisticScreen from '../screens/statistic_screen';
import WalletScreen from '../screens/wallet_screen';
import TargetScreen from '../screens/target_screen';

const NAV_LIST: NavItem[] = [
  {
      icon_name: 'house',
      title: 'Home',
      is_active: true,
      component: HomeScreen,
  },
  {
      icon_name: 'square-poll-vertical',
      title: 'Statistics',
      is_active: false,
      component: StatisticScreen,
  },
  {
      icon_name: 'wallet',
      title: 'Wallet',
      is_active: false,
      component: WalletScreen,
  },
  {
      icon_name: 'trophy',
      title: 'Target',
      is_active: false,
      component: TargetScreen,
  },
];

const NAV_BY_TITLE = Object.fromEntries(
    NAV_LIST.map(item => [item.title, item])
);

const renderTabBarIcon = (route: RouteProp<ParamListBase, string>, size: number, color: string) => (
    <Icon name={NAV_BY_TITLE[route.name].icon_name} size={size * 0.7} color={color} />
);

const MainPage = () => {
    const Tab = createBottomTabNavigator();

    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => renderTabBarIcon(route, size, color),
            tabBarActiveTintColor: '#6541A0',
            tabBarInactiveTintColor: 'gray',
            lazy: true,
          })}
        >
          {
            NAV_LIST.map((navItem, i) => {
              return (
                <Tab.Screen key={i} name={navItem.title} component={navItem.component} />
              );
            })
          }
        </Tab.Navigator>
      </>
    );
};

export default MainPage;
