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
  }

  body {
    font-size: 0.875rem;
    transition: background-color 0.3s ease;
    background-color: ${(props) => props.theme.colors.background};
    font-family: sans-serif;
  }
`;
