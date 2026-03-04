import { useState } from 'react';
import '../styles/BingoCell.css';

export default function BingoCell({ song, isActive, onSelect, questionSong }) {
  const [flash, setFlash] = useState(null);

  if (song.isFree) {
    return (
      <div className="bingo-cell free-cell matched">
        <div className="cell-overlay" />
        <span className="free-text">FREE HOMIE</span>
      </div>
    );
  }

  const handleClick = () => {
    if (song.matched || !questionSong) return;

    if (song.mlyric === questionSong.mlyric) {
      setFlash('correct');
      onSelect(song, true);
    } else {
      setFlash('wrong');
      setTimeout(() => setFlash(null), 800);
      onSelect(song, false);
    }
  };

  return (
    <div
      className={`bingo-cell ${song.matched ? 'matched' : ''} ${flash || ''} ${isActive ? 'active-cell' : ''}`}
      onClick={handleClick}
      style={{
        backgroundImage: song.matched ? 'none' : `url(${song.gif})`,
      }}
    >
      <div className="cell-overlay" />
      <div className="cell-content">
        <h4 className="cell-title">{song.title}</h4>
        <p className="cell-lyric">{song.mlyric}</p>
      </div>
    </div>
  );
}
