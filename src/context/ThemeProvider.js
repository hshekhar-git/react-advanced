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

    // Function to update the color and store it in cookies
    const updateColor = (newColor) => {
        setColor(newColor);
        Cookies.set('color', newColor, { expires: 7 }); // Store for 7 days
    };

    // Sync with cookies on mount and on color change
    useEffect(() => {
        const storedColor = Cookies.get('color');
        if (storedColor && storedColor !== color) {
            setColor(storedColor);
        }

        const syncTabs = () => {
            const updatedColor = Cookies.get('color');
            if (updatedColor && updatedColor !== color) {
                setColor(updatedColor);
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
