import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const LIGHT_THEME = {
  background: '#FFFFFF',
  secondary_background: '#f3f3f3',
  text: '#000000',
  inversed_text: '#FFF',
  primary: '#8357a1',
  secondary: '#6541A0',
  border: '#E0E0E0',
  inactive: 'gray',
};

const DARK_THEME = {
  background: '#404040',
  secondary_background: '#6b6a6a',
  text: '#FFFFFF',
  inversed_text: '#000',
  primary: '#3498DB',
  secondary: '#70c6ff',
  border: '#333333',
  inactive: '#f3f3f3',
};

const defaultContextValue = {
    isDarkMode: false,
    theme: LIGHT_THEME,
    toggleTheme: () => {},
};
const ThemeContext = createContext(defaultContextValue);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

    useEffect(() => {
        async function getStoredItem() {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setIsDarkMode(parseInt(savedTheme, 10) === 1);
            }
        }

        getStoredItem();
    }, []);

    useEffect(() => {
        async function storeIsDarkMode() {
            await AsyncStorage.setItem('theme', isDarkMode ? '1' : '0');
        }

        console.log('CHANGED');
        storeIsDarkMode();
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode: isDarkMode, toggleTheme: () => setIsDarkMode(!isDarkMode), theme: isDarkMode ? DARK_THEME : LIGHT_THEME }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
