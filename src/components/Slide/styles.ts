import styled from 'styled-components';

interface SlideTitleProps {
  imgSrc: string;
}

interface SlideContentProps {
  position: number | string;
  transition: string;
}

export const SlideTitle = styled.img<SlideTitleProps>`
  position: relative;
  display: block;
  content: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  margin: auto;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  transition: transform 1s ease;
  animation: photo 0.3s forwards;

  @keyframes photo {
    from {
      transform: translateX(200px);
    }
    to {
      transform: scale(0.9, 0.9);
    }
  }
`;

export const SlideContent = styled.div<SlideContentProps>`
  display: flex;
  margin-top: 50px;
  transition: ${(props) => props.transition};
  transform: translateX(${(props) => props.position}px);
  &:hover {
    transform: scale(1.1, 1.1);
  }
  grid-area: 1 / 1;
`;

export const SlideContainer = styled.section`
  transition: background-color 0.3s ease;
  overflow: hidden;
  margin-top: 1rem;
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const SlideButton = styled.button`
  @media screen and (max-width: 800px) {
    -webkit-appearance: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    opacity: 0 !important;
  }
  @media screen and (min-width: 800px) {
    cursor: pointer;
    margin: 0 30px;
    padding: 16px 32px;
    border: 0;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    &:hover {
      transition: background-color 0.2s ease;
      background-color: ${(props) => props.theme.colors.hover};
    }
  }
`;

export const SlideNavigation = styled.nav`
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem auto;
  }
  @media screen and (max-width: 800px) {
    display: grid !important;
    grid-area: 1 / 1 !important;
    z-index: 1 !important;
    grid-template-columns: 1fr 1fr !important;
  }
`;
