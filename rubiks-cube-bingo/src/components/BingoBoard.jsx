import BingoCell from './BingoCell';
import '../styles/BingoBoard.css';

export default function BingoBoard({ board, faceTheme, questionSong, onCellSelect, isActiveFace }) {
  return (
    <div className="bingo-board" style={{ '--face-accent': faceTheme.accent }}>
      <div className="board-grid">
        {board.map((song, i) => (
          <BingoCell
            key={`${song.id}-${i}`}
            song={song}
            isActive={questionSong && song.mlyric === questionSong.mlyric}
            onSelect={onCellSelect}
            questionSong={questionSong}
          />
        ))}
      </div>
    </div>
  );
}
