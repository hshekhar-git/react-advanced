import React, { useContext } from 'react'
import useTheme from '../customHooks/useTheme';

function Theme() {
    const { theme, toggleTheme }=useTheme();
    const appStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
  return (
    <div style= {appStyle}> 
        <h1>{`The current theme is ${theme}`}</h1>
        <button onClick={toggleTheme}>Toggle theme</button>
      
    </div>
  )
}

export default Theme;
