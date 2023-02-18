import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import Slide from './components/Slide/index';
import Header from './components/Header/index';
import PhotosEffect from './components/PhotosEffect/index';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Home from './components/Home';

const App = () => {
  const [theme, setTheme] = React.useState(dark);
  const [error, setError] = React.useState<string | null>(null);
  const secondDivRef = useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    const savedThemeLocal = localStorage.getItem('theme') as string;

    if (savedThemeLocal) {
      try {
        const savedThemeParsed = JSON.parse(savedThemeLocal);
        setTheme(savedThemeParsed);
      } catch (error) {
        setError(
          `Oops! Ocorreu um erro ao carregar o tema.
          Reinicie a página, caso não funcione, contate-me: `
        );
      }
    }
  }, []);

  const handleClick = () => secondDivRef.current?.scrollIntoView();

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

  if (error) {
    return (
      <h2>
        {error}
        <a href="https://www.linkedin.com/in/FernandoFrali" target="_blank">
          LinkedIn
        </a>
      </h2>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Home />
        <div className="slides">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Slide />
          <button onClick={handleClick}>Role para baixo</button>
        </div>
        <div className="slides" ref={secondDivRef}>
          <PhotosEffect />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
