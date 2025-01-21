import React, {useContext} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {formatToCurrency, GlobalContext} from '../common';
import { useTheme } from '../context/theme_context';
import ThemedText from './themed_text';

type ActionBarProps = {
  uri: string;
  total_balance: number;
  balance_rate: number;
};

function ActionBar(props: ActionBarProps): React.JSX.Element {
  const { getCurrency } = useContext(GlobalContext);
  const { toggleTheme } = useTheme();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {/* User Profile Image */}
        <Image
          //   resizeMode="cover"
          source={{uri: props.uri}}
          style={styles.image}
        />
      </View>

      {/* Total Balance */}
      <View style={styles.cardBody}>
        <ThemedText style={styles.balanceLabel}>Total Balance</ThemedText>
        <ThemedText style={styles.balanceAmount}>
          {formatToCurrency(props.total_balance, getCurrency().symbol, props.balance_rate / getCurrency().rate)}
        </ThemedText>
      </View>

      {/* Action Add Button */}
      <TouchableOpacity style={styles.cardFooter} onPress={() => toggleTheme()}>
        <ThemedText style={styles.addButton}>+</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '9%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardHeader: {
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardBody: {
    flex: 7,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  balanceLabel: {
    fontWeight: '300',
    fontSize: 16,
    color: '#F3F3F3',
  },
  balanceAmount: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F3F3F3',
  },
  cardFooter: {
    width: 55,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  addButton: {
    fontSize: 35,
    fontWeight: '300',
    color: 'black',
  },
});

export default ActionBar;
