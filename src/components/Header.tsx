import React, {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

export default function Header(){
    const themeContext = useContext<any>(ThemeContext);

    let style = {};

    if(themeContext.theme === 'dark'){
        style = {
            background:'blue',
            color: '#fff'
        }
    } else {
        style = {
            background:'#fff',
            color: 'blue'
        }
    }

    return (
        <div style={style}>
            <p>Header</p>
            <button onClick={themeContext.toggleTheme}>Toggle</button>
        </div>
    );
}