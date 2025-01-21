import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const LIGHT_THEME = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#8357a1',
  secondary: '#8558a0',
  border: '#E0E0E0',
};

const DARK_THEME = {
  background: '#121212',
  text: '#FFFFFF',
  primary: '#3498DB',
  secondary: '#2ECC71',
  border: '#333333',
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
