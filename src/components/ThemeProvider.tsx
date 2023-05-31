import React, {useState} from 'react';

export const ThemeContext = React.createContext({});

interface Props {
    children: React.ReactNode;
}

export function ThemeProvider({children}: Props){
    const [theme, setTheme] = useState('dark');

    function toggleTheme(){
        setTheme( theme === 'dark' ? 'light' : 'dark' );
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}