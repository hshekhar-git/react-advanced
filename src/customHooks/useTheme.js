import React, { useContext } from 'react'
import themeContext from '../context/themeContext';

function useTheme() {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
  return context
}

export default useTheme;
