import React, {useContext} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import {formatToCurrency, GlobalContext} from '../common';

export type CarouselItem = {
  title: string;
  balance: number;
  color: string;
  icon: string;
};

type WalletCarouselProps = {
  items: CarouselItem[];
};

export function WalletCarousel(props: WalletCarouselProps): React.JSX.Element {
  const {currency} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerTextGroup}>
        <Text style={styles.titleText}>Wallets</Text>
        <Text style={styles.moreText}>See More</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.content}
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment="center"
        snapToInterval={210}
        decelerationRate="fast"
        contentContainerStyle={{paddingRight: 20}}>
        {props.items.map((item: CarouselItem, i: number) => (
          <View
            style={[styles.carouselCard, {backgroundColor: item.color}]}
            key={i}>
            <Text style={styles.customFont}>{item.title}</Text>
            <Text style={[styles.customFont, {fontWeight: 'normal'}]}>
              {formatToCurrency(item.balance, currency)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.18,
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
  content: {
    flex: 0.75,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  carouselCard: {
    height: '100%',
    width: 200,
    backgroundColor: 'gray',
    borderRadius: 12,
    padding: 10,
    marginRight: 8,
    color: '#242424',

    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow spread direction
    shadowOpacity: 0.2, // How transparent the shadow is
    shadowRadius: 3.84, // How blurry the shadow is

    elevation: 5,
  },
  customFont: {
    color: '#242424',
    fontWeight: '500',
  },
});
