import React from 'react';

export default function Card({
  src, alt, handleClick, index,
}) {
  return (
    <img
      className="card"
      src={src}
      alt={alt}
      onClick={handleClick}
      data-index={index}
      aria-hidden="true"
    />
  );
}
