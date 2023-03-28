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
  const [photoIndex, setPhotoIndex] = React.useState(0);
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
    const response = await fetch('https://api.pexels.com/v1/curated', {
      headers: {
        Authorization: "k9v2fTGSKoI9WFL359gkeiSlqjmrrrUdqSClIwAdsXZrW0VRsgJdbO2y",
      },
    });
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
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    } else {
      setPhotoIndex(14);
    }
  };

  const slideNext = () => {
    if (photoIndex < 14) {
      setPhotoIndex(photoIndex + 1);
    } else {
      setPhotoIndex(0);
    }
  };

  return (
    <SlideContainer>
      <SlideContent
        ref={contentRef}
        position={position}
        transition={transition}
      >
        {photos.map((photo: fetchType, index) => (
          <div key={photo.id}>
            {index === photoIndex && (
              <SlideTitle key={photo.id} imgSrc={photo.src.original} />
            )}
          </div>
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
