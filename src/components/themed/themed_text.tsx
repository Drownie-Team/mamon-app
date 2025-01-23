import React, { StyleSheet, Text, TextProps } from 'react-native';
import { useTheme } from '../../context/theme_context';

type CustomTextProps = TextProps & {
    inverted?: boolean,
};

function ThemedText({ children, style, inverted = false, ...props }: CustomTextProps) {
    const { theme } = useTheme();

    return (
        <Text style={StyleSheet.flatten([ { color: inverted ? theme.inversed_text : theme.text }, style ])} {...props} >
            {children}
        </Text>
    );
}

export default ThemedText;
