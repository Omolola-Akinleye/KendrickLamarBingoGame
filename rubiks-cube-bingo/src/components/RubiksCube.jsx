import { useState, useRef, useCallback, useEffect } from 'react';
import BingoBoard from './BingoBoard';
import '../styles/RubiksCube.css';

const FACE_NAMES = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const FACE_ROTATIONS = {
  front: { x: 0, y: 0 },
  right: { x: 0, y: -90 },
  back: { x: 0, y: -180 },
  left: { x: 0, y: 90 },
  top: { x: -90, y: 0 },
  bottom: { x: 90, y: 0 },
};

export default function RubiksCube({ boards, faceThemes, questionSong, onCellSelect, activeFace, onFaceChange }) {
  const [rotation, setRotation] = useState({ x: -15, y: -30 });
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const cubeRef = useRef(null);

  const handlePointerDown = useCallback((e) => {
    if (e.target.closest('.bingo-board')) return;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setRotation(prev => ({
      x: prev.x - dy * 0.4,
      y: prev.y + dx * 0.4,
    }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const snapToFace = (faceName) => {
    const target = FACE_ROTATIONS[faceName];
    setIsTransitioning(true);
    setRotation(target);
    onFaceChange(FACE_NAMES.indexOf(faceName));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="cube-container">
      <div className="face-nav">
        {FACE_NAMES.map((face, i) => (
          <button
            key={face}
            className={`face-btn ${activeFace === i ? 'active' : ''}`}
            onClick={() => snapToFace(face)}
            style={{ '--btn-accent': faceThemes[i].accent }}
          >
            <span className="face-btn-icon">{faceThemes[i].icon}</span>
            <span className="face-btn-label">{faceThemes[i].name}</span>
          </button>
        ))}
      </div>

      <div
        className="cube-scene"
        onPointerDown={handlePointerDown}
      >
        <div
          ref={cubeRef}
          className={`cube ${isTransitioning ? 'transitioning' : ''}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Front */}
          <div className="cube-face front" style={{ '--face-bg': faceThemes[0].color }}>
            <BingoBoard
              board={boards[0]}
              faceTheme={faceThemes[0]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 0}
            />
          </div>

          {/* Back */}
          <div className="cube-face back" style={{ '--face-bg': faceThemes[1].color }}>
            <BingoBoard
              board={boards[1]}
              faceTheme={faceThemes[1]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 1}
            />
          </div>

          {/* Right */}
          <div className="cube-face right" style={{ '--face-bg': faceThemes[2].color }}>
            <BingoBoard
              board={boards[2]}
              faceTheme={faceThemes[2]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 2}
            />
          </div>

          {/* Left */}
          <div className="cube-face left" style={{ '--face-bg': faceThemes[3].color }}>
            <BingoBoard
              board={boards[3]}
              faceTheme={faceThemes[3]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 3}
            />
          </div>

          {/* Top */}
          <div className="cube-face top" style={{ '--face-bg': faceThemes[4].color }}>
            <BingoBoard
              board={boards[4]}
              faceTheme={faceThemes[4]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 4}
            />
          </div>

          {/* Bottom */}
          <div className="cube-face bottom" style={{ '--face-bg': faceThemes[5].color }}>
            <BingoBoard
              board={boards[5]}
              faceTheme={faceThemes[5]}
              questionSong={questionSong}
              onCellSelect={onCellSelect}
              isActiveFace={activeFace === 5}
            />
          </div>
        </div>
      </div>

      <p className="drag-hint">Drag to rotate the cube, or click an album above to snap to it</p>
    </div>
  );
}
