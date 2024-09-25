// Action types
export const UPDATE_DECK = 'UPDATE_DECK';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const RESET_GAME = 'RESET_GAME';
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';
export const SET_USERNAME = 'SET_USERNAME';
export const UPDATE_DEFUSE = 'UPDATE_DEFUSE';  // Add this action type

// Action creators
export const updateDeck = (deck) => ({
  type: UPDATE_DECK,
  payload: deck,
});

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  payload: score,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const updateLeaderboard = (username, wins) => ({
  type: UPDATE_LEADERBOARD,
  payload: { username, wins },
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const updateDefuse = (hasDefuse) => ({  // Add this action creator
  type: UPDATE_DEFUSE,
  payload: hasDefuse,
});