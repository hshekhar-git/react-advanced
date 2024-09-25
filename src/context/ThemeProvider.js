import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ children }) => {
    // State to manage the color, initialized from cookies
    const [color, setColor] = useState(() => Cookies.get('color') || 'white');

    // Function to update the color and store it in both cookies and localStorage
    const updateColor = (newColor) => {
        setColor(newColor);
        Cookies.set('color', newColor, { expires: 7 }); // Store for 7 days
        localStorage.setItem('color', newColor); // Update localStorage to sync between tabs
    };

    // Sync with cookies on mount and on color change across tabs
    useEffect(() => {
        const storedColor = Cookies.get('color');
        if (storedColor && storedColor !== color) {
            setColor(storedColor);
        }

        // Listen to localStorage changes to sync across tabs
        const syncTabs = (e) => {
            if (e.key === 'color') {
                const updatedColor = localStorage.getItem('color');
                if (updatedColor && updatedColor !== color) {
                    setColor(updatedColor);
                }
            }
        };

        window.addEventListener('storage', syncTabs);

        return () => {
            window.removeEventListener('storage', syncTabs);
        };
    }, [color]);

    return (
        <ThemeContext.Provider value={{ color, updateColor }}>
            <div style={{ backgroundColor: color, minHeight: '100vh' }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
