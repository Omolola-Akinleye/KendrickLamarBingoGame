import '../styles/BingoWin.css';

export default function BingoWin({ faceName, onNewGame, onClose }) {
  return (
    <div className="win-overlay" onClick={onClose}>
      <div className="win-modal" onClick={e => e.stopPropagation()}>
        <div className="win-glow" />
        <h1 className="win-title">BINGO!</h1>
        <p className="win-subtitle">You a lyrical connoisseur!</p>
        <p className="win-face">Completed on: <strong>{faceName}</strong></p>
        <div className="win-actions">
          <button className="win-btn play-again" onClick={onNewGame}>New Game</button>
          <button className="win-btn continue" onClick={onClose}>Keep Playing</button>
        </div>
      </div>
    </div>
  );
}
