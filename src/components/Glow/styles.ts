import styled from 'styled-components';

export const GlowStyle = styled.div`
  height: 500px;
  aspect-ratio: 1;
  -webkit-transform: translate(-50% -50%);
  position: absolute;
  left: 500px;
  top: 500px;
  transform: translate(-50% -50%);
  -webkit-transform: translate(-50% -50%);
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  -webkit-animation: rotate 20s infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    50% {
      scale: 1 1.5;
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
