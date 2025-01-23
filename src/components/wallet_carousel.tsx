import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {formatToCurrency, GlobalContext, WalletItem} from '../common';
import ThemedText from './themed/themed_text';

type WalletCarouselProps = {
  items: WalletItem[];
};

function WalletCarousel(props: WalletCarouselProps): React.JSX.Element {
  const { getCurrency } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerTextGroup}>
        <ThemedText style={styles.titleText}>Wallets</ThemedText>
        <ThemedText style={styles.moreText}>See More</ThemedText>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.content}
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment="center"
        snapToInterval={210}
        decelerationRate="fast"
        contentContainerStyle={StyleSheet.flatten({paddingRight: 20})}>
        {props.items.map((item: WalletItem, i: number) => (
          <View
            style={[styles.carouselCard, {backgroundColor: item.color}]}
            key={i}>
            <ThemedText style={styles.customFont}>{item.title}</ThemedText>
            <ThemedText style={StyleSheet.flatten([styles.customFont, {fontWeight: 'normal'}])}>
              {formatToCurrency(item.balance, getCurrency().symbol, item.balance_rate / getCurrency().rate)}
            </ThemedText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '18%',
    width: '100%',
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
    // color: '#242424',
  },
  moreText: {
    fontSize: 13,
    fontWeight: '500',
    // color: '#489FCD',
  },
  content: {
    flex: 0.75,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  carouselCard: {
    height: '100%',
    width: 200,
    // backgroundColor: 'gray',
    borderRadius: 12,
    padding: 10,
    marginRight: 8,
    // color: '#242424',

    // shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow spread direction
    shadowOpacity: 0.2, // How transparent the shadow is
    shadowRadius: 3.84, // How blurry the shadow is

    elevation: 5,
  },
  customFont: {
    // color: '#242424',
    fontWeight: '500',
  },
});

export default WalletCarousel;
