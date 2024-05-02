import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const isDeviceDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const defaultTheme = localTheme ? localTheme as Theme : isDeviceDark ? Theme.DARK : Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;