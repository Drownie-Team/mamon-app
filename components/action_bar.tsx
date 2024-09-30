import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function ActionBar(): React.JSX.Element {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.balanceLabel}>Total Balance</Text>
                <Text style={styles.balanceAmount}>Rp. 1,565,000</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={{fontSize: 35, fontWeight: '300', color: 'black'}}>+</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0.09,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
    },
    cardHeader: {
        width: 60,
        height: 60,
        padding: 8,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 100,
    },
    image: {
        height: '100%',
        width: '100%',
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
