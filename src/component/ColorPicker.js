import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ColorPicker = () => {
    const { updateColor } = useTheme();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Pick a color</h1>
            <button onClick={() => updateColor('red')} style={{ marginRight: '10px' }}>
                Red
            </button>
            <button onClick={() => updateColor('green')} style={{ marginRight: '10px' }}>
                Green
            </button>
            <button onClick={() => updateColor('blue')} style={{ marginRight: '10px' }}>
                Blue
            </button>
        </div>
    );
};

export default ColorPicker;
