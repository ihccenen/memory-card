import React, { useState } from 'react';
import Card from './Card';
import imageSrc from './imagesSrc';

export default function Images({ currScore, setCurrScore, setBestScore }) {
  const shuffleArray = (arr) => {
    const shuffledArr = Array.from(arr);
    let currIndex = shuffledArr.length;
    let randomIndex = null;

    while (currIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;

      [shuffledArr[currIndex], shuffledArr[randomIndex]] = [
        shuffledArr[randomIndex], shuffledArr[currIndex],
      ];
    }

    return shuffledArr;
  };

  const [images, setImages] = useState(shuffleArray(imageSrc));
  const [clickedImages, setClickedImages] = useState([]);

  const handleValidClick = (e) => {
    const { index } = e.target.dataset;

    setImages((prev) => shuffleArray(prev));
    setCurrScore((prev) => prev + 1);
    setClickedImages((prev) => prev.concat(images[index]));
  };

  const handleInvalidClick = () => {
    setBestScore((prev) => (prev > currScore ? prev : currScore));
    setCurrScore(0);
    setClickedImages([]);
  };

  return (
    <section className="cards-container">
      {
        images.map((obj, index) => (
          <Card
            index={index}
            src={obj.src}
            alt={obj.alt}
            handleClick={clickedImages.includes(obj) ? handleInvalidClick : handleValidClick}
          />
        ))
      }
    </section>
  );
}
