import React, { StyleSheet, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../context/theme_context';


function ThemedTouchableOpacity({ children, style, ...props }: TouchableOpacityProps) {
    const { theme } = useTheme();

    console.log(StyleSheet.flatten([ { backgroundColor: theme.background } , style ]));

    return (
        <TouchableOpacity style={StyleSheet.flatten([ style, { backgroundColor: theme.background } ])} {...props} >
            {children}
        </TouchableOpacity>
    );
}

export default ThemedTouchableOpacity;
