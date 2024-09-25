import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import the combined reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
