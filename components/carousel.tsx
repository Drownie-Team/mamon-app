import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

export function Carousel(): React.JSX.Element {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={styles.box}><Text>Hello</Text></View>
            <View style={styles.box}><Text>Hello</Text></View>
            <View style={styles.box}><Text>Hello</Text></View>
            <View style={styles.box}><Text>Hello</Text></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'royalBlue',
        zIndex: 10,
    },
    box: {
        height: 100,
        width: 200,
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
});
