import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';

import {GlobalContext} from '../common';
import type {NavItem} from '../common';

export function BottomNav(): React.JSX.Element {
  const {navItems, changeNavigation} = useContext(GlobalContext);

  return (
    <View style={styles.navContainer}>
      {navItems.map((navItem: NavItem, index: number) => {
        return (
          <TouchableOpacity
            style={styles.navButton}
            key={navItem.title}
            onPress={() => changeNavigation(index)}>
            <Icon
              name={navItem.icon_name}
              size={20}
              color={navItem.is_active ? '#8557A0' : '#A0A0A0'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'white',
    elevation: 10,
    padding: 15,
  },
  navButton: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
