'use client';
import { useState } from 'react';
import Image from 'next/image';

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/imgs/banner1.webp',
    '/imgs/banner2.webp',
    '/imgs/banner3.webp',
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <Image
          src={images[currentIndex]}
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <button className="prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default HomeHero;
