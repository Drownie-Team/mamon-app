import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function BudgetBar(): React.JSX.Element {
    return (
        <View style={styles.budgetContainer}>
            {/* <View style={styles.budgetBg}> */}
            <View style={styles.budgetHeader}>
                <Text style={styles.budgetHeaderTitle}>Drownie's October Budget</Text>
            </View>
            <View style={styles.budgetContent}>
                <Text>Holla</Text>
            </View>
            {/* </View> */}
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
        backgroundColor: 'orange',
    },
});
