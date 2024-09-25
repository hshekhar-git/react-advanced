import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import ColorPicker from './component/ColorPicker';


const App = () => {
  return (
    <ThemeProvider>
      <ColorPicker />
    </ThemeProvider>
  );
};

export default App;
