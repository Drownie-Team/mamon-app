import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { ActionBar, BudgetBar, WalletCarousel } from '../components';
import { WalletItem } from '../common';

export function HomePage(): React.JSX.Element {
  // TODO: nanti balikin ke setWallets
  const [wallets, _setWallets] = useState<WalletItem[]>([
    {
      title: 'Tabungan',
      balance: 132,
      balance_rate: 1,
      color: '#CCDFF1',
      icon: 'home',
    },
    {
      title: 'Jajan',
      balance: 368,
      balance_rate: 1,
      color: '#E8F5E4',
      icon: 'home',
    },
    {
      title: 'Harian',
      balance: 500,
      balance_rate: 1,
      color: 'yellow',
      icon: 'home',
    },
  ]);

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
          <ActionBar
            uri="https://randomuser.me/api/portraits/women/80.jpg"
            total_balance={10000}
            balance_rate={1}
          />
          <BudgetBar currentBudgetTotal={500} currentExpenses={300} budgetRate={1} />
          <WalletCarousel items={wallets} />
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
    gap: 15,
  },
});
