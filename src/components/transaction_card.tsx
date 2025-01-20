import React, { useContext } from 'react';
import {ImageSourcePropType, StyleSheet, Text, View, Image} from 'react-native';
import { formatToCurrency, GlobalContext } from '../common';

type TransactionCardProps = {
    img_source?: ImageSourcePropType,
    title: string,
    date: string,
    amount: number,
};

function TransactionCard(props: TransactionCardProps) {
  const { getCurrency } = useContext(GlobalContext);

  return (
    <View style={styles.cardBody}>
      <View style={styles.cardLeftSection}>
        {
            props.img_source !== undefined ?
            <Image source={props.img_source} resizeMode="cover" width={40} height={40} style={styles.img} /> : <></>
        }
        <View>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.subTitleText}>{props.date}</Text>
        </View>
      </View>
      <Text style={StyleSheet.flatten([styles.defaultText, props.amount > 0 ? { color: 'darkgreen' } : { color: 'red' }])}>
        {formatToCurrency(props.amount, getCurrency().symbol)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultText: {color: 'black'},
  titleText: { color: 'black', fontWeight: '700', fontSize: 15 },
  subTitleText: { color: 'gray', fontWeight: '500', fontSize: 11 },

  cardBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingRight: 15,
    paddingLeft: 12,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
  },
  cardLeftSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  img: {
    borderRadius: 8,
  },
});

export default TransactionCard;
