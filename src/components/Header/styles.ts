import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  align-items: center;
  padding: 0 30px;

  h1 {
    text-align: start;
  }

  img {
    justify-self: end;
  }

  div {
    justify-self: end;
  }
`;
