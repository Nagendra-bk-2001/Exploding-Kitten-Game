import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/actions';  // Go one level up and into the redux folder
import GamePage from './GamePage';

const TitlePage = () => {
  const [username, setLocalUsername] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const dispatch = useDispatch();

  const handleStartGame = () => {
    if (username) {
      dispatch(setUsername(username));
      setIsGameStarted(true);
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className="title-page">
      {!isGameStarted ? (
        <>
          <div className="card-container">
            <div className="card">😼</div>
            <div className="card">🙅‍♂️</div>
            <div className="card">🔀</div>
            <div className="card">💣</div>
          </div>
          <h1>😸 Exploding Kitten</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setLocalUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <button onClick={handleStartGame}>💣 Start Game</button>
        </>
      ) : (
        <GamePage />
      )}
    </div>
  );
};

export default TitlePage;
