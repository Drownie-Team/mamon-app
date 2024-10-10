import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

import {formatToCurrency, GlobalContext} from '../common';

enum intervalEnum {
  monthly = 0,
  yearly = 1,
}

type BudgetBarProps = {
  currentExpenses: number;
  currentBudgetTotal: number;
  interval?: intervalEnum;
};

export function BudgetBar(props: BudgetBarProps): React.JSX.Element {
  const {currency} = useContext(GlobalContext);
  let formattedCurrentExpense = formatToCurrency(
    props.currentExpenses,
    currency,
  );

  let formattedCurrentBudgetTotal = formatToCurrency(
    props.currentBudgetTotal,
    currency,
  );

  let calculatePercentage = props.currentExpenses / props.currentBudgetTotal;

  return (
    <View style={styles.budgetContainer}>
      <View style={styles.budgetHeader}>
        <Text style={styles.budgetHeaderTitle}>Drownie's October Budget</Text>
      </View>
      <View style={styles.budgetContent}>
        <View style={styles.budgetTextGroup}>
          <Text style={styles.totalBudgetText}>
            <Text style={styles.currentBudgetText}>
              {formattedCurrentExpense}
            </Text>{' '}
            / {formattedCurrentBudgetTotal}
          </Text>
          <Text style={{color: '#707070', fontSize: 14}}>
            {(calculatePercentage * 100).toFixed(1) + '%'}
          </Text>
        </View>
        <Progress.Bar
          color="#8557A0"
          progress={calculatePercentage}
          width={null}
        />
        <Text
          style={{
            textAlign: 'right',
            marginRight: 2,
            marginTop: 3,
            fontSize: 11,
          }}>
          19 days left
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  budgetContainer: {
    flex: 0.125,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    padding: 10,
  },
  budgetHeader: {
    height: '30%',
  },
  budgetHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  budgetContent: {
    height: '70%',
    paddingHorizontal: 5,
  },
  budgetTextGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  currentBudgetText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2836B5',
  },
  totalBudgetText: {
    fontSize: 14,
    color: '#707070',
  },
});
