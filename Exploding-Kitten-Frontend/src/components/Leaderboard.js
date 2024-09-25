import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const leaderboard = useSelector((state) => state.game.leaderboard);

  const sortedLeaderboard = Object.entries(leaderboard).sort(([, aWins], [, bWins]) => bWins - aWins);

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ul>
        {sortedLeaderboard.map(([username, wins], index) => (
          <li key={index}>
            {username}: {wins} {wins === 1 ? 'win' : 'wins'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;