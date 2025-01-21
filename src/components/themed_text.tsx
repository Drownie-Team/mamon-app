import React, { StyleSheet, Text, TextProps } from 'react-native';
import { useTheme } from '../context/theme_context';

function ThemedText({ children, style, ...props }: TextProps) {
    const { theme } = useTheme();

    return (
        <Text style={StyleSheet.flatten([ style, { color: theme.text } ])} {...props} >
            {children}
        </Text>
    );
}

export default ThemedText;
