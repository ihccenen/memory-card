import React, { useState } from 'react';
import Images from './components/Images';
import ScoreBoard from './components/ScoreBoard';
import './styles/styles.css';

export default function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <main className="flex">
      <ScoreBoard
        currScore={currScore}
        bestCore={bestScore}
      />
      <Images currScore={currScore} setCurrScore={setCurrScore} setBestScore={setBestScore} />
    </main>
  );
}
