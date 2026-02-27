import '../styles/QuestionPanel.css';

export default function QuestionPanel({ question, matchMessage, onNext, onPrev, onNewGame, questionIndex, totalQuestions }) {
  if (!question) return null;

  return (
    <div className="question-panel">
      <div className="question-header">
        <span className="question-count">{questionIndex + 1} / {totalQuestions}</span>
        <h2 className="question-album">{question.album}</h2>
      </div>

      <div className="question-body">
        <p className="question-lyric">{question.inlyric}</p>
        <div className="question-blank">
          <span>_______?</span>
        </div>
      </div>

      {matchMessage && (
        <div className={`match-message ${matchMessage.type}`}>
          {matchMessage.text}
        </div>
      )}

      <div className="question-controls">
        <button
          className="ctrl-btn"
          onClick={onPrev}
          disabled={questionIndex <= 0}
        >
          ← Prev
        </button>

        <button className="ctrl-btn new-game-btn" onClick={onNewGame}>
          New Game
        </button>

        <button
          className="ctrl-btn"
          onClick={onNext}
          disabled={questionIndex >= totalQuestions - 1}
        >
          Next →
        </button>
      </div>

      <div className="question-links">
        {question.genius && (
          <a href={question.genius} target="_blank" rel="noopener noreferrer" className="link-btn genius">
            Genius Lyrics
          </a>
        )}
        {question.youtube && question.youtube.startsWith('http') && (
          <a href={question.youtube} target="_blank" rel="noopener noreferrer" className="link-btn youtube">
            YouTube
          </a>
        )}
      </div>
    </div>
  );
}
