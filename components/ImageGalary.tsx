import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = ['assets/2.png', 'assets/1.png', 'assets/7.png'];

const ImageGallery = () => {
  const [currentImages, setCurrentImages] = useState<string[]>([]); // Provide type annotation
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Provide type annotation

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      let nextImages: string[] = []; // Set the correct type

      if (nextIndex === 0) {
        nextImages = images.slice(0, 2);
      } else if (nextIndex === 2) {
        nextImages = images.slice(2, 6);
      } else if (nextIndex === 6) {
        nextImages = images.slice(6, 10);
      } else if (nextIndex === 10) {
        nextImages = images.slice(10, 12);
      }

      setCurrentImages(nextImages);
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="flex flex-wrap">
      {currentImages.map((image, index) => (
        <div key={index} className="w-1/2 p-2">
          <Image src={image} alt={`Image ${index}`} width={400} height={300} /> {/* Provide width and height */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
