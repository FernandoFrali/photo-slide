import React, { useContext } from 'react';
import { Container } from './styles';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import moon from './moon.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>PhotoSlide</h1>
      <img src={moon} />
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={45}
        handleDiameter={20}
        offColor="#4f5e5d"
        onColor="#105066"
      />
    </Container>
  );
};

export default Header;
