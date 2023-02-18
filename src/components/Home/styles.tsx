import styled from 'styled-components';

export const HomeStyle = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-rows: 40vh 10vh 10vh 40vh;
  grid-template-areas:
    'header'
    'body'
    'footerOne'
    'footerTwo';
  gap: 20px;
  h1 {
    font-family: 'Rubik', sans-serif;
    align-items: center;
    font-size: 4.5rem;
    font-weight: 100;
    letter-spacing: 0.05rem;

    grid-area: body;
  }
  h1 {
    color: white;
    padding: 20px;
  }

  button {
    align-self: center;
    justify-self: center;
    /* width: 6rem; */
    padding: 16px 32px;
    grid-area: footerOne;
  }

  .text-animated {
    animation: text-anime 3s linear infinite;
    background: linear-gradient(to right, blue, aqua, aqua, blue);
    background-size: 200%;
    background-clip: compatibility;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  .text-animated-two {
    font-size: 2rem;
  }

  .text-animated-two > span {
    animation: text-anime 3s linear infinite;
    background: linear-gradient(to right, blue, aqua, aqua, blue);
    background-size: 200%;
    background-clip: compatibility;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  @keyframes text-anime {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }

  .star-and-text {
    display: inline-block;
    position: relative;
  }

  .star {
    --size: clamp(20px, 1.5vw, 30px);
    animation: scale 700ms ease forwards;

    display: block;
    height: var(--size);
    left: var(--star-left);
    position: absolute;
    top: var(--star-top);
    width: var(--size);
  }

  .star > svg {
    animation: rotate 1000ms linear infinite;
    display: block;
    opacity: 0.7;
  }

  .star > svg > path {
    fill: #0ec9c9;
  }

  @keyframes scale {
    from,
    to {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;
