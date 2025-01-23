import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';

import type { NavItem } from '../common';

// Import Screens
import HomeScreen from '../screens/home';
import AnalyticScreen from '../screens/analytic';
import PlanningScreen from '../screens/planning';
import { useTheme } from '../context/theme_context';

const NAV_LIST: NavItem[] = [
  {
      icon_name: 'house',
      title: 'Home',
      is_active: true,
      component: HomeScreen,
  },
  {
      icon_name: 'square-poll-vertical',
      title: 'Analytic',
      is_active: false,
      component: AnalyticScreen,
  },
  {
      icon_name: 'list-check',
      title: 'Planning',
      is_active: false,
      component: PlanningScreen,
  },
];

const NAV_BY_TITLE = Object.fromEntries(
    NAV_LIST.map(item => [item.title, item])
);

const renderTabBarIcon = (route: RouteProp<ParamListBase, string>, size: number, color: string) => (
    <Icon name={NAV_BY_TITLE[route.name].icon_name} size={size * 0.7} color={color} />
);

const MainPage = () => {
    const { theme } = useTheme();
    const Tab = createBottomTabNavigator();

    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => renderTabBarIcon(route, size, color),
            tabBarActiveTintColor: theme.secondary,
            tabBarInactiveTintColor: theme.inactive,
            tabBarActiveBackgroundColor: theme.background,
            tabBarInactiveBackgroundColor: theme.background,
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
