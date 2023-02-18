import React, { useEffect } from 'react';
import { GlowStyle } from './styles';

const Glow: React.FC = () => {
  useEffect(() => {
    document.body.onpointermove = (event) => {
      const glow = document.getElementById('glow');
      const { clientX, clientY } = event;

      if (glow) {
        glow.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      }
    };
  }, []);

  return <GlowStyle id="glow"></GlowStyle>;
};

export default Glow;
