import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useDarkMode() {
    return useContext(DarkModeContext);
}   

