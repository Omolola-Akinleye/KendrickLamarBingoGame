import { useState, useCallback } from 'react';
import RubiksCube from './components/RubiksCube';
import QuestionPanel from './components/QuestionPanel';
import BingoWin from './components/BingoWin';
import { allSongs, cubeFaces, generateBoard, shuffle } from './data/songs';
import './App.css';

function checkBingo(board) {
  const grid = [];
  for (let r = 0; r < 3; r++) {
    grid.push(board.slice(r * 3, r * 3 + 3));
  }

  // Check rows
  for (let r = 0; r < 3; r++) {
    if (grid[r].every(cell => cell.matched)) return true;
  }

  // Check columns
  for (let c = 0; c < 3; c++) {
    if (grid.every(row => row[c].matched)) return true;
  }

  // Check diagonals
  if ([0, 1, 2].every(i => grid[i][i].matched)) return true;
  if ([0, 1, 2].every(i => grid[i][2 - i].matched)) return true;

  return false;
}

export default function App() {
  const [boards, setBoards] = useState(() =>
    Array.from({ length: 6 }, (_, i) => generateBoard(i))
  );
  const [activeFace, setActiveFace] = useState(0);
  const [questions, setQuestions] = useState(() => shuffle([...allSongs]));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [matchMessage, setMatchMessage] = useState(null);
  const [winFace, setWinFace] = useState(null);
  const [gameKey, setGameKey] = useState(0);

  const currentQuestion = questions[questionIndex];

  const handleCellSelect = useCallback((song, isCorrect) => {
    if (isCorrect) {
      setMatchMessage({ type: 'correct', text: 'Correct Match!' });
      setBoards(prev => {
        const newBoards = prev.map((board) =>
          board.map(cell =>
            cell.id === song.id && cell.mlyric === song.mlyric
              ? { ...cell, matched: true }
              : cell
          )
        );

        // Check for bingo on each face
        newBoards.forEach((board, faceIdx) => {
          if (checkBingo(board)) {
            setTimeout(() => setWinFace(faceIdx), 300);
          }
        });

        return newBoards;
      });

      // Auto-advance to next question after a short delay
      setTimeout(() => {
        setQuestionIndex(prev => Math.min(prev + 1, questions.length - 1));
        setMatchMessage(null);
      }, 1000);
    } else {
      setMatchMessage({ type: 'wrong', text: 'Try Again Homie!' });
      setTimeout(() => setMatchMessage(null), 1500);
    }
  }, [questions.length]);

  const handleNext = useCallback(() => {
    setQuestionIndex(prev => Math.min(prev + 1, questions.length - 1));
    setMatchMessage(null);
  }, [questions.length]);

  const handlePrev = useCallback(() => {
    setQuestionIndex(prev => Math.max(prev - 1, 0));
    setMatchMessage(null);
  }, []);

  const handleNewGame = useCallback(() => {
    setBoards(Array.from({ length: 6 }, (_, i) => generateBoard(i)));
    setQuestions(shuffle([...allSongs]));
    setQuestionIndex(0);
    setMatchMessage(null);
    setWinFace(null);
    setActiveFace(0);
    setGameKey(k => k + 1);
  }, []);

  const handleFaceChange = useCallback((faceIdx) => {
    setActiveFace(faceIdx);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">K.DOT LINGO</h1>
        <p className="app-subtitle">Rubik&#39;s Cube Edition</p>
      </header>

      <main className="app-main">
        <div className="game-layout">
          <QuestionPanel
            question={currentQuestion}
            matchMessage={matchMessage}
            onNext={handleNext}
            onPrev={handlePrev}
            onNewGame={handleNewGame}
            questionIndex={questionIndex}
            totalQuestions={questions.length}
          />

          <RubiksCube
            key={gameKey}
            boards={boards}
            faceThemes={cubeFaces}
            questionSong={currentQuestion}
            onCellSelect={handleCellSelect}
            activeFace={activeFace}
            onFaceChange={handleFaceChange}
          />
        </div>
      </main>

      {winFace !== null && (
        <BingoWin
          faceName={cubeFaces[winFace].name}
          onNewGame={handleNewGame}
          onClose={() => setWinFace(null)}
        />
      )}
    </div>
  );
}
