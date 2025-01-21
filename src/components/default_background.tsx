import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/theme_context';

function DefaultBackground() {
    const { theme } = useTheme();

    const defaultViewStyle = StyleSheet.flatten([styles.view, { backgroundColor: theme.primary }]);
    return (
        <>
            <View style={defaultViewStyle} />
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '20%',
        backgroundColor: '#85589f',
    },
});

export default DefaultBackground;
