import React from 'react';
import {
  SlideContainer,
  SlideButton,
  SlideTitle,
  SlideContent,
  SlideNavigation,
} from './styles';

interface fetchType {
  src: {
    original: string;
  };
  id: string;
}

const Slide: React.FC = () => {
  const [active, setActive] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number | string>(0);
  const [photos, setPhotos] = React.useState([]);
  const [transition, setTransition] = React.useState('transform 0.2s ease');
  const contentRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    fetchPhotos();
    if (contentRef.current) {
      const { width } = contentRef.current.getBoundingClientRect();
      setPosition(-(active * width));
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [active]);

  const fetchPhotos = async () => {
    const response = await fetch('https://api.pexels.com/v1/curated');
    const json = await response.json();
    setPhotos(json.photos);
  };

  const handleWindowResize = () => {
    if (contentRef.current) {
      const { width } = contentRef.current.getBoundingClientRect();
      setPosition(-(active * width));
    }
  };

  const slidePrev = () => {
    if (active > 0) {
      setTransition('transform 0.2s ease');
      setActive(active - 1);
    } else {
      setActive(photos.length - 1);
      setTransition('');
    }
  };

  const slideNext = () => {
    if (active < photos.length - 1) {
      setTransition('transform 0.2s ease');
      setActive(active + 1);
    } else if (active === photos.length - 1) {
      setActive(0);
      setTransition('');
    }
  };

  return (
    <SlideContainer>
      <SlideContent
        ref={contentRef}
        position={position}
        transition={transition}
      >
        {photos.map((photo: fetchType) => (
          <SlideTitle key={photo.id} imgSrc={photo.src.original} />
        ))}
      </SlideContent>
      <SlideNavigation>
        <SlideButton onClick={slidePrev}>Anterior</SlideButton>
        <SlideButton onClick={slideNext}>Próximo</SlideButton>
      </SlideNavigation>
    </SlideContainer>
  );
};

export default Slide;
