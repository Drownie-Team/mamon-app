import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TransactionCard from './transaction_card';

export function TransactionBar() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTextGroup}>
        <Text style={styles.titleText}>Transactions</Text>
        <Text style={styles.moreText}>See More</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TransactionCard
          title="Belanja Bulanan"
          date="2024-10-14"
          amount={-200_000}
          img_source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4290/4290854.png',
            cache: 'default',
          }}
        />
        <TransactionCard
          title="Gaji"
          date="2024-10-10"
          amount={2_000_000}
          img_source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/781/781835.png',
            cache: 'default',
          }}
        />
        <TransactionCard
          title="Komisi Projek"
          date="2024-10-09"
          amount={200_000}
          img_source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/781/781835.png',
            cache: 'default',
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '55%',
    width: '100%',
  },
  scrollView: {
    display: 'flex',
    gap: 10,
  },
  headerTextGroup: {
    flex: 0.25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#242424',
  },
  moreText: {
    fontSize: 13,
    color: '#489FCD',
  },
});
