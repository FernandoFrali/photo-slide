import styled from 'styled-components';

export const GlowStyle = styled.div`
  height: 500px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% -50%);
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  /* filter: blur(200px); */
  /* z-index: 2; */

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
