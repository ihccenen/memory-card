import React from 'react';

export default function ScoreBoard({ currScore, bestCore }) {
  return (
    <section className="score-board flex">
      <p>{`Current Score: ${currScore}`}</p>
      <p>{`Best Score: ${bestCore}`}</p>
    </section>
  );
}
