import trollFace from '../images/TrollFace.png';
import React from 'react';

export default function Header() {
  return (
    <header>
      <img src={trollFace} alt="Troll Face"></img>
      <h1>Meme Generator</h1>
    </header>
  );
}
