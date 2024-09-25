import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeck, updateScore, resetGame, updateLeaderboard, setUsername } from '../redux/actions';

const GamePage = () => {
  const dispatch = useDispatch();
  const { deck, score, username, defuseCard, gameOver, leaderboard } = useSelector((state) => state.game);
  const [description, setDescription] = useState('');
  const [drawnCards, setDrawnCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    shuffleDeck();
  }, []);

  const getCardEmoji = (cardName) => {
    switch (cardName) {
      case 'Cat': return '😼';
      case 'Defuse': return '🙅‍♂️';
      case 'Shuffle': return '🔀';
      case 'Exploding Kitten': return '💣';
      default: return '❓';
    }
  };

  const shuffleDeck = () => {
    const cardTypes = ['Cat', 'Defuse', 'Shuffle', 'Exploding Kitten', 'Cat'];
    const shuffledDeck = cardTypes.sort(() => Math.random() - 0.5);
    dispatch(updateDeck(shuffledDeck));
  };

  const drawCard = () => {
    if (deck.length > 0) {
      const drawnCard = deck[0];
      const remainingDeck = deck.slice(1);

      setDescription(getCardDescription(drawnCard));
      setDrawnCards((prevCards) => [...prevCards, drawnCard]);
      setCurrentCard(drawnCard);

      switch (drawnCard) {
        case 'Cat':
          dispatch(updateScore(score + 1));
          dispatch(updateDeck(remainingDeck));
          break;
        case 'Defuse':
          dispatch(updateScore(score + 1));
          dispatch(updateDeck(remainingDeck));
          dispatch({ type: 'UPDATE_DEFUSE', payload: true });
          break;
        case 'Exploding Kitten':
          if (defuseCard) {
            alert('You defused the bomb!');
            dispatch({ type: 'UPDATE_DEFUSE', payload: false });
            dispatch(updateDeck(remainingDeck));
          } else {
            alert('Game Over! You lost!');
            dispatch({ type: 'GAME_OVER' });
          }
          break;
        case 'Shuffle':
          alert('Deck is shuffled! Restarting the game...');
          handleRestart();
          break;
      }

      if (remainingDeck.length === 0 && drawnCard !== 'Exploding Kitten') {
        alert('Congratulations! You won!');
        handleRestart();
      }
    }
  };

  const getCardDescription = (cardName) => {
    switch (cardName) {
      case 'Cat': return 'Just a cute cat card. It\'s removed from the deck.';
      case 'Defuse': return 'Defuses the bomb. It\'s removed from the deck.';
      case 'Shuffle': return 'Shuffles the deck and restarts the game.';
      case 'Exploding Kitten': return 'Boom! You lose unless you have a Defuse card.';
      default: return 'Unknown card type';
    }
  };

  
  const handleRestart = () => {
    const userWins = leaderboard[username] ? leaderboard[username] + 1 : 1;
    dispatch(updateLeaderboard(username, userWins));
    dispatch(resetGame());
    setDrawnCards([]);
    setDescription('');
    setCurrentCard(null);
    shuffleDeck();
  };

  const sortedLeaderboard = Object.entries(leaderboard)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="game-page">
      <nav className="navbar">
        <div className="navbar-left">Exploding Kitten</div>
        <div className="navbar-center">All the Best, {username}!</div>
        <div className="navbar-right">Live Score: {score}</div>
      </nav>

      <div className="game-content">
        <div className="description-area">
          <h3>Card Description</h3>
          <p>{description}</p>
        </div>

        <div className="card-area">
          <button className="draw-button" onClick={drawCard} disabled={gameOver || deck.length === 0}>
            Draw Card
          </button>
          {currentCard && (
            <div className="current-card">
              <span role="img" aria-label={currentCard} style={{fontSize: '48px'}}>{getCardEmoji(currentCard)}</span>
              <p>{currentCard}</p>
            </div>
          )}
        </div>

        <div className="history-area">
          <h3>Drawn Cards History</h3>
          <ul className="drawn-cards">
            {drawnCards.map((card, index) => (
              <li key={index}>{card}</li>
            ))}
          </ul>
        </div>
      </div>

      {gameOver && (
        <div className="game-over-dialog">
          <h2>Game Over!</h2>
          <div className="leaderboard">
            <h3>Leaderboard</h3>
            <ul>
              {sortedLeaderboard.map(([name, wins], index) => (
                <li key={index}>
                  <span className="leaderboard-name">{name}</span>
                  <span className="leaderboard-score">{wins}</span>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default GamePage;