import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

// Import Types
import type { WalletItem } from '../common';

// Import Component
import DefaultBackground from '../components/default_background';
import ActionBar from '../components/action_bar';
import BudgetBar from '../components/budget_bar';
import WalletCarousel from '../components/wallet_carousel';
import { TransactionBar } from '../components/transactions_bar';

const wallets: WalletItem[] = [
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
];

function HomeScreen(): React.JSX.Element {
  useEffect(() => {
    console.log('RENDER HOME SCREEN');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultBackground />

      {/* Content */}
      <View style={styles.content}>
        <ActionBar
          uri="https://randomuser.me/api/portraits/women/80.jpg"
          total_balance={10000}
          balance_rate={1}
        />

        <BudgetBar currentBudgetTotal={500} currentExpenses={300} budgetRate={1} />
        <WalletCarousel items={wallets} />
        <TransactionBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative', backgroundColor: '#f3f3f3' },
  content: { position: 'absolute', display: 'flex', width: '100%', height: '100%', zIndex: 100, paddingHorizontal: 15, paddingVertical: 20, gap: 15 },
});


export default HomeScreen;
