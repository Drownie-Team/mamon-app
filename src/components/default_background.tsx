import React from 'react';
import { Image, StyleSheet } from 'react-native';

function DefaultBackground() {
    return (
        <>
            <Image style={StyleSheet.flatten({width: '100%'})} source={require('../../assets/images/top_bg.png')} />
        </>
    );
}

export default DefaultBackground;
