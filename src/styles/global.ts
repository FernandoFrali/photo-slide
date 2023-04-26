import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.colors.scroll.track};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.scroll.thumb};
}

::-webkit-scrollbar-thumb:hover {
  background: #1e9c94;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-size: 0.875rem;
    transition: background-color 0.3s ease;
    background-color: ${(props) => props.theme.colors.background};
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
  }

  #root {
    position: relative;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  .container {
    height: 100vh;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: y mandatory;
    -webkit-scroll-snap-type: mandatory;
    overflow-y: scroll;
    position: relative;
  }
  
  .slides {
    margin: 10px 0;
    height: 100vh;
    scroll-snap-align: start;
  }

  .slides:nth-child(2) {
    height: 100vh;
  }

  .glow {
    background-color: white;
    height: 500px;
    aspect-ratio: 1;
  }

  button {
    position: relative;
    z-index: 2;
  }
`;
