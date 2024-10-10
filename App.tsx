/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {GlobalContext} from './common';
import type {NavItem, GlobalContextProps} from './common';
import {ActionBar, BudgetBar, BottomNav, WalletCarousel} from './components';

type WalletItem = {
  title: string;
  balance: number;
  color: string;
  icon: string;
};

function App(): React.JSX.Element {
  const [currency, setCurrency] = useState('Rp. ');
  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      icon_name: 'house',
      title: 'Home',
      is_active: true,
    },
    {
      icon_name: 'square-poll-vertical',
      title: 'Statistics',
      is_active: false,
    },
    {
      icon_name: 'wallet',
      title: 'Wallet',
      is_active: false,
    },
    {
      icon_name: 'trophy',
      title: 'Target',
      is_active: false,
    },
  ]);
  // TODO: nanti balikin ke setWallets
  const [wallets, _setWallets] = useState<WalletItem[]>([
    {
      title: 'Tabungan',
      balance: 400000,
      color: '#CCDFF1',
      icon: 'home',
    },
    {
      title: 'Jajan',
      balance: 3750000,
      color: '#E8F5E4',
      icon: 'home',
    },
    {
      title: 'Harian',
      balance: 50000,
      color: 'yellow',
      icon: 'home',
    },
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const baseContainer = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const handleChangeCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleChangeNav = (index: number) => {
    console.log(index);
    const updateNavItem = navItems.map((item: NavItem, i: number) => ({
      ...item,
      is_active: i === index,
    }));

    setNavItems(updateNavItem);
  };

  const defaultContextValue: GlobalContextProps = {
    navItems: navItems,
    changeNavigation: handleChangeNav,
    currency: currency,
    changeCurrency: handleChangeCurrency,
  };

  return (
    <SafeAreaView style={baseContainer}>
      <View style={styles.baseTop} />
      <View style={styles.baseBottom} />
      <GlobalContext.Provider value={defaultContextValue}>
        <View style={styles.content}>
          <ActionBar
            uri="https://randomuser.me/api/portraits/women/80.jpg"
            total_balance={3450200}
          />
          <BudgetBar currentBudgetTotal={3000000} currentExpenses={2500000} />
          <WalletCarousel items={wallets} />
        </View>
        <BottomNav />
      </GlobalContext.Provider>
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
    gap: 15,
  },
});

export default App;
