import React from 'react';
import { ThemeProvider } from 'styled-components';

import Slide from './components/Slide/index';
import Header from './components/Header/index';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = () => {
  const [theme, setTheme] = React.useState(dark);

  React.useEffect(() => {
    const savedThemeLocal = localStorage.getItem('theme') as string;
    const savedThemeParsed = JSON.parse(savedThemeLocal);

    if (savedThemeLocal) {
      setTheme(savedThemeParsed);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    if (theme.title === 'light') {
      const darkTheme = JSON.stringify(dark);
      localStorage.setItem('theme', darkTheme);
    } else {
      const lightTheme = JSON.stringify(light);
      localStorage.setItem('theme', lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Slide />
      </>
    </ThemeProvider>
  );
};

export default App;
