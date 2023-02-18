import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  transition: background-color 0.3s ease;
  color: ${(props) => props.theme.colors.text};
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  align-items: center;
  padding: 0 30px;
  z-index: 3;
  width: 100vw;

  h1 {
    text-align: start;
  }

  img {
    justify-self: end;
  }

  div {
    justify-self: end;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
