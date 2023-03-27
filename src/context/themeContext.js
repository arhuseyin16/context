import {createContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider =({children}) => {

  const mode = localStorage.getItem('mode');
  const [theme, setTheme] = useState(mode ? mode : 'dark');
  useEffect(() => {
    localStorage.setItem('mode', theme)
  }, [theme])
  const values = {
    theme,
    setTheme
  };
  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};

export default ThemeContext;
