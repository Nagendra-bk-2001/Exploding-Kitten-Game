import { UPDATE_DECK, UPDATE_SCORE, RESET_GAME, UPDATE_LEADERBOARD } from './actions';

const initialState = {
  deck: [],
  score: 0,
  username: '',
  defuseCard: false,
  gameOver: false,
  leaderboard: {}
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DECK:
      return { ...state, deck: action.payload };
    case UPDATE_SCORE:
      return { ...state, score: action.payload };
    case 'UPDATE_DEFUSE':
      return { ...state, defuseCard: action.payload };
    case 'GAME_OVER':
      return { ...state, gameOver: true };
    case RESET_GAME:
      return { ...initialState, username: state.username, leaderboard: state.leaderboard };
    case UPDATE_LEADERBOARD:
      return {
        ...state,
        leaderboard: {
          ...state.leaderboard,
          [action.payload.username]: action.payload.wins
        }
      };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default gameReducer;