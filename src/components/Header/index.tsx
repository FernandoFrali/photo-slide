import React, { useContext } from 'react';
import { Container } from './styles';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useTheme } from 'styled-components';
import moon from './moon.svg';
import sun from './sun.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>
        <a href="/">PhotoSlide</a>
      </h1>
      <img src={title === 'dark' ? moon : sun} />
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={17}
        width={35}
        handleDiameter={20}
        offColor="#4f5e5d"
        onColor="#105066"
      />
    </Container>
  );
};

export default Header;
